/* @flow */
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { personallyReducer } from '../src/lib/personally-reducer';
import { type MakeStoreOptions } from '../src/lib';

const makeConfiguredStore = (reducer, initialState = { personally: {} }) =>
  createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default (initialState: object, { isServer }: MakeStoreOptions) => {
  if (isServer) {
    return makeConfiguredStore(personallyReducer, initialState);
  }
  // we need it only on client side
  /* eslint-disable global-require */
  const { persistStore, persistReducer } = require('redux-persist');
  const storage = require('redux-persist/lib/storage').default;

  const persistConfig = {
    key: 'next-zero',
    whitelist: ['personally'], // make sure it does not clash with server keys
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, personallyReducer);
  const store = makeConfiguredStore(persistedReducer, initialState);

  // eslint-disable-next-line no-underscore-dangle
  store.__persistor = persistStore(store); // Nasty hack

  return store;
};
