/* eslint-disable global-require */

const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const isProduction = env === 'production';
const isDevelopment = env === 'development';
// const isTest = env === 'test';

// eslint-disable-next-line no-unused-vars
module.exports = (context, options = {}) => ({
  presets: [require('@babel/preset-flow')],
  plugins: [
    isDevelopment && require('babel-plugin-flow-react-proptypes'),
    [
      require('@babel/plugin-transform-destructuring').default,
      {
        // Use loose mode for performance:
        // https://github.com/facebook/create-react-app/issues/5602
        loose: false,
        selectiveLoose: [
          'useState',
          'useEffect',
          'useContext',
          'useReducer',
          'useCallback',
          'useMemo',
          'useRef',
          'useImperativeHandle',
          'useLayoutEffect',
          'useDebugValue',
        ],
      },
    ],
    require('@babel/plugin-proposal-do-expressions').default,
    [
      require('@babel/plugin-proposal-class-properties').default,
      {
        loose: true,
      },
    ],
    require('@babel/plugin-proposal-export-default-from').default,
    // isProduction && require('@babel/plugin-transform-flow-strip-types'),
    isProduction && [
      // Remove PropTypes from production build
      require('babel-plugin-transform-react-remove-prop-types').default,
      {
        removeImport: true,
      },
    ],
    require('@babel/plugin-syntax-dynamic-import').default,
  ].filter(Boolean),
});
