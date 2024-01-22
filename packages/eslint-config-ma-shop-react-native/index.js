module.exports = {
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  globals: {
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [ './rules/general' ].map(require.resolve),
  plugins: [ 'react-native' ],
  rules: {},
}
