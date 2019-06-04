/* @flow */
/* eslint-disable no-console */
// https://github.com/kirill-konshin/next-redux-wrapper/blob/master/packages/wrapper/src/index.tsx
import isServer from 'detect-node';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { type NextComponentType, type NextContext } from 'next';
import { type NextAppContext } from 'next/app';
import { type Store } from 'redux';

const defaultConfig: Config = {
  storeKey: '__NEXT_REDUX_STORE__',
  debug: false,
  serializeState: state => state,
  deserializeState: state => state,
};

export default (makeStore: MakeStore, customConfig?: Config) => {
  const config = {
    ...defaultConfig,
    ...customConfig,
  };

  const initStore = ({ initialState, ctx }: InitStoreOptions): Store => {
    const { storeKey } = config;

    const createStore = () =>
      makeStore(config.deserializeState(initialState), {
        ...ctx,
        ...config,
        isServer,
      });

    // Always make a new store if server, otherwise state is shared between requests
    if (isServer) return createStore();

    // Memoize store if client
    // Create store if unavailable on the client and set it on the window object
    if (!Object.prototype.hasOwnProperty.call(window, storeKey)) {
      window[storeKey] = createStore();
    }

    return window[storeKey];
  };

  return (App: NextComponentType) =>
    class NextZeroApp extends Component<WrappedAppProps> {
      store: Store;

      constructor(props, context) {
        super(props, context);

        const { initialState } = props;

        if (config.debug) console.log('3. NextZeroApp.render created new store with initialState', initialState);

        this.store = initStore({
          initialState,
        });
      }

      static getInitialProps = async (appCtx: NextJSAppContext) => {
        /* istanbul ignore next */
        if (!appCtx) throw new Error('No app context');
        /* istanbul ignore next */
        if (!appCtx.ctx) throw new Error('No page context');

        const store = initStore({
          ctx: appCtx.ctx,
        });

        if (config.debug)
          console.log('1. NextZeroApp.getInitialProps wrapper got the store with state', store.getState());

        const { ctx } = appCtx;
        ctx.store = store;
        ctx.isServer = isServer;

        let initialProps = {};

        if ('getInitialProps' in App) {
          initialProps = await App.getInitialProps.call(App, appCtx);
        }

        if (config.debug) console.log('2. NextZeroApp.getInitialProps has store state', store.getState());

        return {
          isServer,
          initialState: config.serializeState(store.getState()),
          initialProps,
        };
      };

      render() {
        const { initialProps, initialState, ...props } = this.props;

        // Cmp render must return something like <Provider><Component/></Provider>
        return (
          <Provider store={this.store}>
            <App {...props} {...initialProps} store={this.store} />
          </Provider>
        );
      }
    };
};

export interface Config {
  serializeState?: object => object;
  deserializeState?: object => object;
  storeKey?: string;
  debug?: boolean;
  overrideIsServer?: boolean;
}

interface NextJSContext extends NextContext {
  store: Store;
  isServer: boolean;
}

export interface NextJSAppContext extends NextAppContext {
  ctx: NextJSContext;
}

export interface MakeStoreOptions extends Config, NextJSContext {
  isServer: boolean;
}

export type MakeStore = (initialState: object, options: MakeStoreOptions) => Store;

export interface InitStoreOptions {
  initialState?: object;
  ctx?: NextJSContext;
}

export interface WrappedAppProps {
  initialProps: object; // stuff returned from getInitialProps
  initialState: object; // stuff in the Store state after getInitialProps
  isServer: boolean;
}

export interface AppProps {
  store: Store;
}
