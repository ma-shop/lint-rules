module.exports = {
  rules: {
    // detects styles that aren't being used.
    'react-native/no-unused-styles': 'error',

    // sort styles automatically
    'react-native/sort-styles': [ 'error', 'asc' ],

    // don't allow colors, force devs to use the color function
    'react-native/no-color-literals': 'error',

    // we don't do development like this so it doesn't apply to us
    'react-native/split-platform-components': 'off',

    // we currently allow this
    'react-native/no-inline-styles': 'off',

    // we have to many components that accept text to use this
    'react-native/no-raw-text': 'off',

    // @todo add this when it's been released
    'react-native/no-single-element-style-arrays': 'off',

  },
}
