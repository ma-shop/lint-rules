module.exports = {
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  globals: {
    __DEV__: true,
  },
  extends: [ 'eslint-config-ma-shop-react' ],
  plugins: [ 'react-native' ],
  rules: {
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    'react/jsx-filename-extension': [ 'error', { extensions: [ '.js', '.jsx' ] } ],
  },
}
