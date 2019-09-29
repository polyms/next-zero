const restrictedGlobals = require("eslint-restricted-globals");

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: "babel-eslint",
  plugins: ["babel", "flowtype", "jest", "prettier"],
  rules: {
    "class-methods-use-this": OFF,
    "flowtype/no-weak-types": WARNING,
    // 'flowtype/require-parameter-type': OFF,
    // 'flowtype/require-return-type': [OFF, 'always', { annotateUndefined: 'never' }],
    // 'flowtype/require-valid-file-annotation': ERROR,
    // 'import/extensions': OFF,
    // 'import/no-dynamic-require': OFF,
    // 'import/no-unresolved': ERROR,
    'import/prefer-default-export': OFF,
    // 'new-cap': OFF,
    // 'no-class-assign': OFF,
    // 'no-plusplus': OFF,
    "no-restricted-globals": ["error"].concat(restrictedGlobals),
    // 'no-restricted-syntax': ['error', 'WithStatement'],
    // 'no-underscore-dangle': OFF,
    'no-unused-expressions': OFF,
    'no-use-before-define': WARNING,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: "es5"
      }
    ],
    "react/react-in-jsx-scope": OFF,
    // "filenames/match-exported": [2, [ null, "kebab", "snake" ] ],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.stories.*", "**/*.test.*", "**/testing.*"] }
    ]
    // 'react/prefer-stateless-function': OFF,
    // 'react/sort-comp': OFF,
    // 'react/destructuring-assignment': OFF,
  }
};
