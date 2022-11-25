/* eslint-disable max-lines */
const rules = {
  /**
   * @see {@link https://eslint.org/docs/latest/rules/accessor-pairs}
   */
  'accessor-pairs': [
    'warn',
    {
      setWithoutGet: true,
      getWithoutSet: false,
      enforceForClassMembers: true,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/arrow-body-style}
   */
  'arrow-body-style': ['warn', 'as-needed'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/block-scoped-var}
   */
  'block-scoped-var': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/camelcase}
   */
  camelcase: [
    'warn',
    {
      properties: 'always',
      ignoreDestructuring: false,
      ignoreImports: false,
      ignoreGlobals: false,
      allow: ['^UNSAFE_'],
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/capitalized-comments}
   */
  'capitalized-comments': [
    'off',
    'always',
    {
      ignorePattern: void 0,
      ignoreInlineComments: true,
      ignoreConsecutiveComments: false,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/class-methods-use-this}
   */
  'class-methods-use-this': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/complexity}
   */
  complexity: ['warn', { max: 15 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/consistent-return}
   */
  'consistent-return': ['warn', { treatUndefinedAsUnspecified: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/consistent-this}
   */
  'consistent-this': ['warn', 'that'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/curly}
   */
  curly: ['warn', 'multi', 'consistent'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/default-case}
   */
  'default-case': ['warn', { commentPattern: void 0 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/default-case-last}
   */
  'default-case-last': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/default-param-last}
   */
  'default-param-last': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/dot-notation}
   */
  'dot-notation': ['warn', { allowKeywords: true, allowPattern: void 0 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/eqeqeq}
   */
  eqeqeq: ['warn', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/func-name-matching}
   */
  'func-name-matching': [
    'warn',
    'always',
    {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: true,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/func-names}
   */
  'func-names': ['warn', 'as-needed'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/func-style}
   */
  'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/grouped-accessor-pairs}
   */
  'grouped-accessor-pairs': ['warn', 'getBeforeSet'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/guard-for-in}
   */
  'guard-for-in': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/id-denylist}
   */
  'id-denylist': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/id-length}
   */
  'id-length': [
    'warn',
    {
      min: 2,
      max: Infinity,
      properties: 'always',
      exceptions: void 0,
      exceptionPatterns: [],
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/id-match}
   */
  'id-match': [
    'off',
    {
      properties: false,
      classFields: false,
      onlyDeclarations: false,
      ignoreDestructuring: false,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/init-declarations}
   */
  'init-declarations': ['warn', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/logical-assignment-operators}
   */
  'logical-assignment-operators': ['warn', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-classes-per-file}
   */
  'max-classes-per-file': ['warn', { max: 1, ignoreExpressions: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-depth}
   */
  'max-depth': ['warn', { max: 4 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-lines}
   */
  'max-lines': ['warn', { max: 200, skipBlankLines: true, skipComments: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-lines-per-function}
   */
  'max-lines-per-function': [
    'warn',
    {
      max: 50,
      skipBlankLines: false,
      skipComments: false,
      IIFEs: false,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-nested-callbacks}
   */
  'max-nested-callbacks': ['warn', { max: 3 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-params}
   */
  'max-params': ['warn', { max: 4 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-statements}
   */
  'max-statements': ['off', { max: 10 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/multiline-comment-style}
   */
  'multiline-comment-style': ['warn', 'starred-block'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/new-cap}
   */
  'new-cap': [
    'warn',
    {
      newIsCap: true,
      capIsNew: false,
      newIsCapExceptions: [],
      capIsNewExceptions: [],
      properties: true,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-alert}
   */
  'no-alert': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-array-constructor}
   */
  'no-array-constructor': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-bitwise}
   */
  'no-bitwise': ['warn', { allow: [], int32Hint: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-caller}
   */
  'no-caller': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-case-declarations}
   */
  'no-case-declarations': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-confusing-arrow}
   */
  'no-confusing-arrow': [
    'warn',
    { allowParens: true, onlyOneSimpleParam: false },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-console}
   */
  'no-console': ['warn', { allow: void 0 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-continue}
   */
  'no-continue': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-delete-var}
   */
  'no-delete-var': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-div-regex}
   */
  'no-div-regex': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-else-return}
   */
  'no-else-return': ['warn', { allowElseIf: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-empty}
   */
  'no-empty': ['warn', { allowEmptyCatch: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-function}
   */
  'no-empty-function': ['warn', { allow: [] }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-static-block}
   */
  'no-empty-static-block': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-eq-null}
   */
  'no-eq-null': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-eval}
   */
  'no-eval': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extend-native}
   */
  'no-extend-native': ['warn', { exceptions: [] }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-bind}
   */
  'no-extra-bind': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-boolean-cast}
   */
  'no-extra-boolean-cast': ['warn', { enforceForLogicalOperands: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-label}
   */
  'no-extra-label': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-semi}
   */
  'no-extra-semi': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-floating-decimal}
   */
  'no-floating-decimal': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-global-assign}
   */
  'no-global-assign': ['warn', { exceptions: [] }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-implicit-coercion}
   */
  'no-implicit-coercion': [
    'warn',
    {
      boolean: false,
      number: true,
      string: true,
      disallowTemplateShorthand: true,
      allow: [],
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-implicit-globals}
   */
  'no-implicit-globals': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-implied-eval}
   */
  'no-implied-eval': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-inline-comments}
   */
  'no-inline-comments': ['warn', { ignorePattern: void 0 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-invalid-this}
   */
  'no-invalid-this': ['warn', { capIsConstructor: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-iterator}
   */
  'no-iterator': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-label-var}
   */
  'no-label-var': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-labels}
   */
  'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-lone-blocks}
   */
  'no-lone-blocks': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-lonely-if}
   */
  'no-lonely-if': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-loop-func}
   */
  'no-loop-func': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-magic-numbers}
   */
  'no-magic-numbers': [
    'warn',
    {
      ignore: [0, 1, 2],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      ignoreClassFieldInitialValues: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-mixed-operators}
   */
  'no-mixed-operators': [
    'warn',
    {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-multi-assign}
   */
  'no-multi-assign': ['warn', { ignoreNonDeclaration: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-multi-str}
   */
  'no-multi-str': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-negated-condition}
   */
  'no-negated-condition': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-nested-ternary}
   */
  'no-nested-ternary': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new}
   */
  'no-new': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new-func}
   */
  'no-new-func': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new-object}
   */
  'no-new-object': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new-wrappers}
   */
  'no-new-wrappers': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape}
   */
  'no-nonoctal-decimal-escape': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-octal}
   */
  'no-octal': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-octal-escape}
   */
  'no-octal-escape': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-param-reassign}
   */
  'no-param-reassign': ['warn', { props: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-plusplus}
   */
  'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-proto}
   */
  'no-proto': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-redeclare}
   */
  'no-redeclare': ['warn', { builtinGlobals: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-regex-spaces}
   */
  'no-regex-spaces': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-exports}
   */
  'no-restricted-exports': [
    'warn',
    {
      restrictedNamedExports: [],
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-globals}
   */
  'no-restricted-globals': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-imports}
   */
  'no-restricted-imports': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-properties}
   */
  'no-restricted-properties': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-syntax}
   */
  'no-restricted-syntax': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-return-assign}
   */
  'no-return-assign': ['warn', 'except-parens'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-return-await}
   */
  'no-return-await': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-script-url}
   */
  'no-script-url': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-sequences}
   */
  'no-sequences': ['warn', { allowInParentheses: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-shadow}
   */
  'no-shadow': [
    'warn',
    {
      builtinGlobals: false,
      hoist: 'functions',
      allow: [],
      ignoreOnInitialization: true,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-shadow-restricted-names}
   */
  'no-shadow-restricted-names': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-ternary}
   */
  'no-ternary': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-throw-literal}
   */
  'no-throw-literal': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-undef-init}
   */
  'no-undef-init': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-undefined}
   */
  'no-undefined': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-underscore-dangle}
   */
  'no-underscore-dangle': [
    'warn',
    {
      allow: [],
      allowAfterThis: true,
      allowAfterSuper: true,
      allowAfterThisConstructor: true,
      enforceInMethodNames: false,
      enforceInClassFields: false,
      allowFunctionParams: true,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unneeded-ternary}
   */
  'no-unneeded-ternary': ['warn', { defaultAssignment: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-expressions}
   */
  'no-unused-expressions': [
    'warn',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
      enforceForJSX: true,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-labels}
   */
  'no-unused-labels': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-call}
   */
  'no-useless-call': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-catch}
   */
  'no-useless-catch': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-computed-key}
   */
  'no-useless-computed-key': ['warn', { enforceForClassMembers: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-concat}
   */
  'no-useless-concat': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-constructor}
   */
  'no-useless-constructor': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-escape}
   */
  'no-useless-escape': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-rename}
   */
  'no-useless-rename': [
    'warn',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-return}
   */
  'no-useless-return': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-var}
   */
  'no-var': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-void}
   */
  'no-void': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-warning-comments}
   */
  'no-warning-comments': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-with}
   */
  'no-with': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/object-shorthand}
   */
  'object-shorthand': ['warn', 'consistent-as-needed'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/one-var}
   */
  'one-var': ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/one-var-declaration-per-line}
   */
  'one-var-declaration-per-line': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/operator-assignment}
   */
  'operator-assignment': ['warn', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-arrow-callback}
   */
  'prefer-arrow-callback': [
    'warn',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-const}
   */
  'prefer-const': ['warn', { destructuring: 'all' }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-destructuring}
   */
  'prefer-destructuring': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-exponentiation-operator}
   */
  'prefer-exponentiation-operator': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-named-capture-group}
   */
  'prefer-named-capture-group': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-numeric-literals}
   */
  'prefer-numeric-literals': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-object-has-own}
   */
  'prefer-object-has-own': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-object-spread}
   */
  'prefer-object-spread': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-promise-reject-errors}
   */
  'prefer-promise-reject-errors': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-regex-literals}
   */
  'prefer-regex-literals': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-rest-params}
   */
  'prefer-rest-params': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-spread}
   */
  'prefer-spread': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/prefer-template}
   */
  'prefer-template': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/quote-props}
   */
  'quote-props': ['warn', 'as-needed'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/radix}
   */
  radix: ['warn', 'as-needed'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/require-await}
   */
  'require-await': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/require-unicode-regexp}
   */
  'require-unicode-regexp': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/require-yield}
   */
  'require-yield': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/sort-imports}
   */
  'sort-imports': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/sort-keys}
   */
  'sort-keys': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/sort-vars}
   */
  'sort-vars': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/spaced-comment}
   */
  'spaced-comment': ['off', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/strict}
   */
  strict: ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/symbol-description}
   */
  'symbol-description': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/vars-on-top}
   */
  'vars-on-top': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/yoda}
   */
  yoda: ['warn', 'never'],
}

module.exports = { rules }
