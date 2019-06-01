const withNZ = require('./src/server/with-nz');

const { version } = require('./package.json');

module.exports = withNZ({
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    version,
  },
  transpileModules: ['@lzd/next-toolkit', '@lzd/uikit', '@lzd/dx-react-grid-bootstrap4'],
});

// import getConfig from 'next/config'
// const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
