module.exports = {
  'arrow-body-style': ['error', 'as-needed'],
  'object-shorthand': ['error', 'always'],
  'no-console': 'error',
  'array-callback-return': [
    'error',
    {
      allowImplicit: true,
      checkForEach: true
    }
  ],
  'getter-return': [
    'error',
    {
      allowImplicit: true
    }
  ],
  'no-await-in-loop': 'error',
  'no-cond-assign': ['error', 'always'],
  'no-constructor-return': 'error',
  'no-duplicate-imports': 'off',
  'no-inner-declarations': ['error', 'both'],
  'no-promise-executor-return': 'error',
  'no-self-compare': 'error',
  'no-template-curly-in-string': 'error',
  'no-undef': [
    'error',
    {
      typeof: true
    }
  ],
  'no-unmodified-loop-condition': 'error',
  'no-unreachable-loop': 'error',
  'no-unsafe-negation': [
    'error',
    {
      enforceForOrderingRelations: true
    }
  ],
  'no-unsafe-optional-chaining': [
    'error',
    {
      disallowArithmeticOperators: true
    }
  ],
  'no-unused-private-class-members': 'error',
  'no-unused-vars': [
    'off',
    {
      vars: 'all',
      args: 'all',
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      caughtErrors: 'all'
    }
  ],
  'no-use-before-define': 'off',
  'require-atomic-updates': 'error',
  'use-isnan': [
    'error',
    {
      enforceForIndexOf: true
    }
  ],
  'valid-typeof': [
    'error',
    {
      requireStringLiterals: true
    }
  ],
  'accessor-pairs': 'off',

  'block-scoped-var': 'error',
  camelcase: 'error',
  'capitalized-comments': 'off',
  'class-methods-use-this': ['off', { enforceForClassFields: true }],
  complexity: ['error', 8],
  'consistent-return': 'error',
  'default-case-last': 'error',
  'default-param-last': 'off',
  'dot-notation': 'off',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'func-name-matching': 'error',
  'func-names': 'error',
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'grouped-accessor-pairs': ['off', 'getBeforeSet'],
  'guard-for-in': ['error'],
  'id-denylist': [
    'error',
    //"data",
    'err',
    'e',
    'cb',
    'callback',
    //'manager',
    //'result',
    'event',
    'evt',
    'func',
    'fun',
    //'obj',
    'object',
    'val'
    //'value',
    //'number'
  ],
  'id-length': ['error', { min: 2, exceptions: ['i', 'j', 'x', 'y', 'z', '_'] }],
  'init-declarations': 'off',
  'max-classes-per-file': ['error', 1],
  'max-depth': ['error', 2],
  'max-lines': [
    'error',
    {
      max: 128,
      skipBlankLines: true,
      skipComments: true
    }
  ],
  'max-lines-per-function': [
    'error',
    {
      max: 24,
      skipBlankLines: true,
      skipComments: true
    }
  ],
  'max-nested-callbacks': ['error', 2],
  'max-params': ['off', 3],
  'max-statements': ['error', 8],
  'multiline-comment-style': 'off',
  'new-cap': 'off',
  'no-alert': 'error',
  'no-array-constructor': 'off',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-confusing-arrow': 'off',
  'no-continue': 'off',
  'no-div-regex': 'error',
  'no-else-return': [
    'error',
    {
      allowElseIf: false
    }
  ],
  'no-empty-function': 'off',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
  'no-floating-decimal': 'error',
  'no-implicit-coercion': 'off',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'off',
  'no-inline-comments': 'off',
  'no-invalid-this': 'off',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'off',
  'no-magic-numbers': ['off', { ignore: [0, 1] }],
  'no-mixed-operators': 'off',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-object': 'error',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': ['error', { props: true }],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'no-proto': 'error',
  'no-restricted-imports': [
    'off',
    {
      paths: [
        'assert',
        'buffer',
        'child_process',
        'cluster',
        'crypto',
        'dgram',
        'dns',
        'domain',
        'events',
        'freelist',
        'fs',
        'http',
        'https',
        'module',
        'net',
        'os',
        'path',
        'punycode',
        'querystring',
        'readline',
        'repl',
        'smalloc',
        'stream',
        'string_decoder',
        'sys',
        'timers',
        'tls',
        'tracing',
        'tty',
        'url',
        'util',
        'vm',
        'zlib'
      ]
    }
  ],
  'no-return-assign': ['error', 'always'],
  'no-return-await': 'off',
  'no-script-url': 'error',
  'no-sequences': ['error', { allowInParentheses: false }],
  'no-shadow': ['off', { builtinGlobals: true, hoist: 'all' }],
  'no-throw-literal': 'off',
  'no-undef-init': 'error',
  'no-undefined': 'off',
  'no-underscore-dangle': 'off',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unused-expressions': 'off',
  'no-useless-call': 'error',
  'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
  'no-useless-concat': 'error',
  'no-useless-constructor': 'off',
  'no-useless-rename': 'error',
  'no-useless-return': 'off',
  'no-var': 'error',
  'no-void': 'error',

  'one-var': ['error', 'never'],
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': [
    'error',
    {
      array: true,
      object: true
    },
    {
      enforceForRenamedProperties: false
    }
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-named-capture-group': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'quote-props': [
    'error',
    'as-needed',
    {
      keywords: true,
      unnecessary: true,
      numbers: true
    }
  ],
  radix: 'error',
  'require-await': 'off',
  'require-unicode-regexp': 'error',
  'sort-imports': 'off',
  'sort-vars': 'error',
  'spaced-comment': ['off', 'always'],
  strict: 'error',
  'symbol-description': 'error',
  'vars-on-top': 'error',
  yoda: 'error'
};
