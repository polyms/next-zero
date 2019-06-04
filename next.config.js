/* @flow */
/* eslint-disable import/no-extraneous-dependencies */
import { type NextConfig } from 'next';
import withSourceMaps from '@zeit/next-source-maps';
import withImages from 'next-images';
import withPlugins from 'next-compose-plugins';
import withMDX from '@next/mdx';
import withNZ from './src/server/with-nz';

const { version } = require('./package.json');

const plugins = [withSourceMaps, withImages, withNZ, [withMDX(), { pageExtensions: ['js', 'jsx', 'mdx'] }]];

const nextConfig: NextConfig = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    version,
  },
  transpileModules: [],
  webpack: (config, { webpack }) => {
    const conf = config;

    // Fixes npm packages that depend on `fs` module
    conf.node = {
      fs: 'empty',
    };

    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    // Example using webpack option
    conf.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    return conf;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};

export default withPlugins([...plugins], nextConfig);

// import getConfig from 'next/config'
// const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
