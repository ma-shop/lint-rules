module.exports = {
  env: {
    jest: true,
  },
  globals: {
    __DEV__: true,
  },
  extends: [ './rules/general' ].map(require.resolve),
  plugins: [ 'react-native' ],
  rules: {},
}
