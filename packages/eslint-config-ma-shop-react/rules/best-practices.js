const baseStyleRules = require('eslint-config-airbnb/rules/react').rules


module.exports = {
  rules: {
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'renderItem',
          'renderFooter',
          'renderHeader',
          'renderChildren',
          'renderList',
          'renderListItem',
          'renderEmptyList',
          ...baseStyleRules['class-methods-use-this'][1].exceptMethods,
        ],
        enforceForClassFields: true,
      },
    ],
  },
}
