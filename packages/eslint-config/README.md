# @next-zero/eslint-config

Eslint config utilizing Airbnb config, Flow, Prettier and Jest support.

Plugins and configs used:
* [eslint-config-airbnb](https://yarnpkg.com/en/package/eslint-config-airbnb)
* [eslint-config-prettier](https://yarnpkg.com/en/package/eslint-config-prettier)
* [eslint-plugin-flowtype](https://yarnpkg.com/en/package/eslint-plugin-flowtype)
* [eslint-plugin-jest](https://yarnpkg.com/en/package/eslint-plugin-jest)

Additionally, it sets these environments:
```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  }
}
```

## Installation

```
yarn add --dev eslint @next-zero/eslint-config
```

*Note: We're using `yarn` to install deps. Feel free to change commands to use `npm` 3+ and `npx` if you like*

## Usage

Add to your eslint config (`.eslintrc`, or `eslintConfig` field in `package.json`):

```json
{
    "extends": "@next-zero"
}
```

### Example of extending the configuration

```json
{
    "extends": "@next-zero",
    "rules": {
        "global-require": 0,
        "prefer-destructuring": 0
    }
}
```
