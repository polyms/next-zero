/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import App from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

import '../styles/main.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MainApp extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>My new cool app</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
export default MainApp;
