module.exports = {
  rules: {
    // this prevents easy customization
    'react/no-typos': 'off',

    // @todo check if this works in the next update
    // This currently throws way to many errors, also doesn't support private class variables.
    'react/sort-comp': 'off',

    // we do this all the time
    'react/no-multi-comp': 'off',

    // this is a useless rule, that we always have to disable
    'react/no-did-update-set-state': 'off',

    // let the initial eslint rules handle the destructuring
    'react/destructuring-assignment': 'off',

    // Enforces consistent naming for boolean props
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'error',
      {
        propTypeNames: [ 'bool', 'mutuallyExclusiveTrueProps' ],
        rule: '^(?:(is|has|no)[A-Z]([A-Za-z0-9]?)+)|if',
        message: 'It is better if your prop ({{propName}}) matches this pattern: ({{pattern}})',
        validateNested: true,
      },
    ],

    // disabled because it throws a lot of false positives
    'react/no-this-in-sfc': 'off',

    'react/prop-types': [
      'error',
      {
        ignore: [ 'style', 'client' ],
        customValidators: [],
        skipUndeclared: true,
      },
    ],

    // it's allowed if you actually need it
    'react/state-in-constructor': [ 'warn', 'never' ],

    // this is off because it's stupid
    'react/jsx-props-no-spreading': 'off',

    'react/static-property-placement': [
      'error',
      'static public field',
      {
        defaultProps: 'property assignment',
        propTypes: 'property assignment',
      },
    ],
  },
}
