module.exports = {
  env: {
    jest: true,
  },
  globals: {
    __DEV__: true,
  },
  extends: [
    'eslint-config-ma-shop-react',
    './rules/general',
  ].map(require.resolve),
  plugins: [ 'react-native' ],
  rules: {},
}
