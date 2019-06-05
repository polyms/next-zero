"use strict";var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));var withSass = require('@zeit/next-sass');
// https://github.com/zeit/next.js/tree/master/examples/analyze-bundles
var withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
var withTM = require('next-transpile-modules');

var templateConfig = {
  transpileModules: [],
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html' },

    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html' } } };




module.exports = function () {var nextConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return withBundleAnalyzer(withTM(withSass((0, _assign.default)({}, templateConfig, nextConfig))));
};
//# sourceMappingURL=with-nz.js.map