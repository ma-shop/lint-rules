module.exports = {
  env: {
    jest: true,
  },
  globals: {
    __DEV__: true,
  },
  extends: [ 'eslint-config-ma-shop-react' ],
  plugins: [ 'react-native' ],
  rules: {
    // was able to remove this rule because of this http://www.fallingcanbedeadly.com/posts/enabling-react-native-jsx-extension
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    // 'react/jsx-filename-extension': [ 'error', { extensions: [ '.js', '.jsx' ] } ],
  },
}
