module.exports = {
  rules: {
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        { type: 'at-rule', name: 'extend' },
        'declarations',

        // `%foo` stylus/scss placeholders
        { type: 'rule', selector: /(aka %foo)|^[%$]\w/ },

        // `&:before` (aka pseudo selectors/elements)
        { type: 'rule', selector: /(aka &:before)|^&$|^&::?[a-z-]+/ },

        // `.foo &` nested parent selector
        { type: 'rule', selector: /(aka .foo &)|^[.#]?[a-z]+ &|^.+&$/ },

        // `&.bar`, `&--zoom`, `+ .foo` compound/modifier selector
        {
          type: 'rule',
          selector: /(aka &.foo, &--foo, + .foo)|^&[.#][a-z]+|^&--[a-z_-]+|^[+~>]{1}.+/,
        },

        { type: 'at-rule', name: 'media' }, // `@media` media queries
        { type: 'at-rule', name: 'include', parameter: 'media' }, // `@include media` include style media query

        // `&__foo` bem element, `.foo` nested element
        {
          type: 'rule',
          selector: /(aka &__foo, .foo)|^&__[a-z-_]+|^[.#]?[a-z-_\s]+|^\*/,
        },
      ],
      {
        disableFix: true,
      },
    ],

    'order/properties-order': null,

    'order/properties-alphabetical-order': true,
  },
}
