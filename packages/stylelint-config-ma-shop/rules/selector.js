const pattern = /^[a-z][a-z-_]+[a-z]$/;

module.exports = {
  rules: {
    // Specify a pattern for class selectors.
    'selector-class-pattern': pattern,

    // Specify a pattern for id selectors.
    'selector-id-pattern': /^never style elements with an id$/,

    // Specify single colon notation for applicable pseudo-elements.
    'selector-pseudo-element-colon-notation': 'single',
  },
};
