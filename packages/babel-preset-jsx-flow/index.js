/* eslint-disable global-require */

// const env = process.env.NODE_ENV;
const isProduction = env === 'production';
// const isDevelopment = env === 'development';
// const isTest = env === 'test';

// eslint-disable-next-line no-unused-vars
module.exports = (context, options = {}) => ({
  presets: [require("@babel/preset-flow")],
  plugins: [
    [
      require("@babel/plugin-transform-destructuring").default,
      {
        // Use loose mode for performance:
        // https://github.com/facebook/create-react-app/issues/5602
        loose: false,
        selectiveLoose: [
          "useState",
          "useEffect",
          "useContext",
          "useReducer",
          "useCallback",
          "useMemo",
          "useRef",
          "useImperativeHandle",
          "useLayoutEffect",
          "useDebugValue"
        ]
      }
    ],
    require("@babel/plugin-proposal-do-expressions"),
    [
      require("@babel/plugin-proposal-class-properties").default,
      {
        loose: true
      }
    ],
    [
      require("@babel/plugin-transform-runtime").default,
      {
        corejs: false,
        helpers: areHelpersEnabled,
        regenerator: true,
        // https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
        // We should turn this on once the lowest version of Node LTS
        // supports ES Modules.
        useESModules,
        // Undocumented option that lets us encapsulate our runtime, ensuring
        // the correct version is used
        // https://github.com/babel/babel/blob/090c364a90fe73d36a30707fc612ce037bdbbb24/packages/babel-plugin-transform-runtime/src/index.js#L35-L42
        absoluteRuntime: absoluteRuntimePath
      }
    ],
    require("@babel/plugin-proposal-export-default-from"),
    require("@babel/plugin-transform-flow-strip-types"),
    isEnvProduction && [
      // Remove PropTypes from production build
      require("babel-plugin-transform-react-remove-prop-types").default,
      {
        removeImport: true
      }
    ],
    require("@babel/plugin-syntax-dynamic-import").default,
    isEnvTest &&
      // Transform dynamic import to require
      require("babel-plugin-dynamic-import-node")
  ].filter(Boolean)
});
