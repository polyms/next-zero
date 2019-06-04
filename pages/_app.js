/* @flow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import App, { Container, type NextAppContext } from 'next/app';
import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';
import NProgress from 'nprogress';
import Router from 'next/router';
import withRedux, { type AppProps } from '../src/lib/with-redux-app';
import makeStore from '../demo/make-store';
import '../demo/styles/styles.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MainApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = { name: Component.displayName };
    if (typeof Component.getInitialProps === 'function') {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Head>
          <title>next-zero framework</title>
        </Head>
        <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>
          <Component {...pageProps} />
        </PersistGate>
      </Container>
    );
  }
}
export default withRedux(makeStore, { debug: true })(MainApp);
