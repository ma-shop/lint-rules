module.exports = {
  extends: [ './test' ].map(require.resolve),
  globals: {
    // detox specific globals
    by: true,
    device: true,
    element: true,
    waitFor: true,
  },
  rules: {
    'react-native/no-color-literals': 'off',
  },
}
