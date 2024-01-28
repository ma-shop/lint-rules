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
    ecmaVersion: 'latest',
    // @note this is required for projects that don't use babel
    requireConfigFile: false,
  },
  extends: [ './rules/general' ].map(require.resolve),
  plugins: [ 'react-native' ],
  rules: {},
}
