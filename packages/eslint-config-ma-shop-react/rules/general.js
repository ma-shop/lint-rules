module.exports = {
  rules: {
    // this prevents easy customization
    'react/no-typos': 'off',

    // Enforce component methods order
    // @todo remove when it's published
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: [ '/^render.+$/', 'render' ],
        },
      },
    ],

    // Enforces consistent naming for boolean props
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'error',
      {
        propTypeNames: [ 'bool', 'mutuallyExclusiveTrueProps' ],
        rule: '^(?:(is|has|no)[A-Z]([A-Za-z0-9]?)+)|if',
        message: '',
      },
    ],

    // Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
    // let the initial eslint rules handle the destructuring
    'react/destructuring-assignment': 'off',

    // disabled because it throws a lot of false positives
    'react/no-this-in-sfc': 'off',

    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
      },
    ],
  },
}
