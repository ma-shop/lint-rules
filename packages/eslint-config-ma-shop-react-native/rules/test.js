module.exports = {
  extends: [ 'eslint-config-ma-shop-react/test' ].map(require.resolve),
  globals: {
    shallow: true,
    render: true,
    mount: true,
  },
  rules: {
    'react-native/no-color-literals': 'off',
  },
}
