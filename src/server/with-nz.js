const withSass = require('@zeit/next-sass');
// https://github.com/zeit/next.js/tree/master/examples/analyze-bundles
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withTM = require('next-transpile-modules');

const templateConfig = {
  transpileModules: [],
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
};

module.exports = (nextConfig = {}) => {
  return withBundleAnalyzer(withTM(withSass(Object.assign({}, templateConfig, nextConfig))));
};
