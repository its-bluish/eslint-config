/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable max-lines */
const path = require('path')
const fs = require('fs')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: fs.existsSync(path.resolve('tsconfig.lint.json'))
      ? path.resolve('tsconfig.lint.json')
      : path.resolve('tsconfig.json'),
    tsconfigRootDir: path.resolve(),
  },
  plugins: ['@typescript-eslint'],
  rules: {
    /**
     * @see {@link https://typescript-eslint.io/rules/adjacent-overload-signatures}
     */
    '@typescript-eslint/adjacent-overload-signatures': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/array-type}
     */
    '@typescript-eslint/array-type': ['off', 'array-simple'],

    /**
     * @see {@link https://typescript-eslint.io/rules/await-thenable}
     */
    '@typescript-eslint/await-thenable': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/ban-ts-comment}
     */
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      { 'ts-expect-error': 'allow-with-description' },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/ban-tslint-comment}
     */
    '@typescript-eslint/ban-tslint-comment': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/class-literal-property-style}
     */
    '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],

    /**
     * @see {@link https://typescript-eslint.io/rules/consistent-generic-constructors}
     */
    '@typescript-eslint/consistent-generic-constructors': [
      'warn',
      'constructor',
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/consistent-indexed-object-style}
     */
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],

    /**
     * @see {@link https://typescript-eslint.io/rules/consistent-type-assertions}
     */
    '@typescript-eslint/consistent-type-assertions': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/consistent-type-definitions}
     */
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

    /**
     * @see {@link https://typescript-eslint.io/rules/consistent-type-exports}
     */
    '@typescript-eslint/consistent-type-exports': [
      'off',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/consistent-type-imports}
     */
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'no-type-imports',
        disallowTypeAnnotations: false,
        fixStyle: 'inline-type-imports',
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/explicit-member-accessibility}
     */
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/explicit-module-boundary-types}
     */
    '@typescript-eslint/explicit-module-boundary-types': [
      'off',
      {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: [],
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/member-ordering}
     */
    '@typescript-eslint/member-ordering': ['off'],

    /**
     * @see {@link https://typescript-eslint.io/rules/method-signature-style}
     */
    '@typescript-eslint/method-signature-style': ['warn', 'method'],

    /**
     * @see {@link https://typescript-eslint.io/rules/naming-convention}
     */
    '@typescript-eslint/naming-convention': ['off'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-base-to-string}
     */
    '@typescript-eslint/no-base-to-string': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-confusing-non-null-assertion}
     */
    '@typescript-eslint/no-confusing-non-null-assertion': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-confusing-void-expression}
     */
    '@typescript-eslint/no-confusing-void-expression': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-duplicate-enum-values}
     */
    '@typescript-eslint/no-duplicate-enum-values': ['error'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-dynamic-delete}
     */
    '@typescript-eslint/no-dynamic-delete': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-empty-interface}
     */
    '@typescript-eslint/no-empty-interface': [
      'off',
      { allowSingleExtends: true },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-explicit-any}
     */
    '@typescript-eslint/no-explicit-any': [
      'warn',
      { fixToUnknown: true, ignoreRestArgs: true },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-extra-non-null-assertion}
     */
    '@typescript-eslint/no-extra-non-null-assertion': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-extraneous-class}
     */
    '@typescript-eslint/no-extraneous-class': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-floating-promises}
     */
    '@typescript-eslint/no-floating-promises': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-for-in-array}
     */
    '@typescript-eslint/no-for-in-array': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-inferrable-types}
     */
    '@typescript-eslint/no-inferrable-types': [
      'warn',
      { ignoreParameters: false, ignoreProperties: false },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-invalid-void-type}
     */
    '@typescript-eslint/no-invalid-void-type': [
      'warn',
      { allowInGenericTypeArguments: true, allowAsThisParameter: false },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-meaningless-void-operator}
     */
    '@typescript-eslint/no-meaningless-void-operator': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-misused-new}
     */
    '@typescript-eslint/no-misused-new': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-misused-promises}
     */
    '@typescript-eslint/no-misused-promises': [
      'warn',
      { checksConditionals: true, checksVoidReturn: true, checksSpreads: true },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-namespace}
     */
    '@typescript-eslint/no-namespace': ['off'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing}
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain}
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-non-null-assertion}
     */
    '@typescript-eslint/no-non-null-assertion': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-redundant-type-constituents}
     */
    '@typescript-eslint/no-redundant-type-constituents': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-this-alias}
     */
    '@typescript-eslint/no-this-alias': [
      'warn',
      { allowDestructuring: true, allowedNames: [] },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-type-alias}
     */
    '@typescript-eslint/no-type-alias': [
      'warn',
      {
        allowAliases: 'always',
        allowCallbacks: 'always',
        allowConditionalTypes: 'always',
        allowConstructors: 'always',
        allowLiterals: 'never',
        allowMappedTypes: 'always',
        allowTupleTypes: 'in-unions',
        allowGenerics: 'always',
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare}
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      'warn',
      {
        allowComparingNullableBooleansToTrue: true,
        allowComparingNullableBooleansToFalse: true,
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-condition}
     */
    '@typescript-eslint/no-unnecessary-condition': [
      'warn',
      {
        allowConstantLoopConditions: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-qualifier}
     */
    '@typescript-eslint/no-unnecessary-qualifier': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-arguments}
     */
    '@typescript-eslint/no-unnecessary-type-arguments': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-assertion}
     */
    '@typescript-eslint/no-unnecessary-type-assertion': [
      'warn',
      { typesToIgnore: [] },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-constraint}
     */
    '@typescript-eslint/no-unnecessary-type-constraint': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-declaration-merging}
     */
    '@typescript-eslint/no-unsafe-declaration-merging': ['off'],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-useless-empty-export}
     */
    '@typescript-eslint/no-useless-empty-export': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/non-nullable-type-assertion-style}
     */
    '@typescript-eslint/non-nullable-type-assertion-style': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/parameter-properties}
     */
    '@typescript-eslint/parameter-properties': [
      'warn',
      {
        prefer: 'parameter-property',
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-as-const}
     */
    '@typescript-eslint/prefer-as-const': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-enum-initializers}
     */
    '@typescript-eslint/prefer-enum-initializers': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-for-of}
     */
    '@typescript-eslint/prefer-for-of': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-function-type}
     */
    '@typescript-eslint/prefer-function-type': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-includes}
     */
    '@typescript-eslint/prefer-includes': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-literal-enum-member}
     */
    '@typescript-eslint/prefer-literal-enum-member': [
      'warn',
      { allowBitwiseExpressions: false },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-namespace-keyword}
     */
    '@typescript-eslint/prefer-namespace-keyword': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-nullish-coalescing}
     */
    '@typescript-eslint/prefer-nullish-coalescing': [
      'warn',
      {
        ignoreConditionalTests: false,
        ignoreTernaryTests: false,
        ignoreMixedLogicalExpressions: false,
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-optional-chain}
     */
    '@typescript-eslint/prefer-optional-chain': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-readonly}
     */
    '@typescript-eslint/prefer-readonly': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-readonly-parameter-types}
     */
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-reduce-type-parameter}
     */
    '@typescript-eslint/prefer-reduce-type-parameter': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-regexp-exec}
     */
    '@typescript-eslint/prefer-regexp-exec': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-return-this-type}
     */
    '@typescript-eslint/prefer-return-this-type': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-string-starts-ends-with}
     */
    '@typescript-eslint/prefer-string-starts-ends-with': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/prefer-ts-expect-error}
     */
    '@typescript-eslint/prefer-ts-expect-error': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/promise-function-async}
     */
    '@typescript-eslint/promise-function-async': [
      'warn',
      {
        allowAny: true,
        allowedPromiseNames: [],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/require-array-sort-compare}
     */
    '@typescript-eslint/require-array-sort-compare': [
      'warn',
      { ignoreStringArrays: true },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/restrict-plus-operands}
     */
    '@typescript-eslint/restrict-plus-operands': [
      'warn',
      { checkCompoundAssignments: true, allowAny: false },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/restrict-template-expressions}
     */
    '@typescript-eslint/restrict-template-expressions': [
      'warn',
      {
        allowNumber: true,
        allowBoolean: false,
        allowAny: false,
        allowNullish: false,
        allowRegExp: false,
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/sort-type-constituents}
     */
    '@typescript-eslint/sort-type-constituents': [
      'off',
      {
        checkIntersections: true,
        checkUnions: true,
        groupOrder: [
          'named',
          'keyword',
          'operator',
          'literal',
          'function',
          'import',
          'conditional',
          'object',
          'tuple',
          'intersection',
          'union',
          'nullish',
        ],
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/strict-boolean-expressions}
     */
    '@typescript-eslint/strict-boolean-expressions': ['off'],

    /**
     * @see {@link https://typescript-eslint.io/rules/switch-exhaustiveness-check}
     */
    '@typescript-eslint/switch-exhaustiveness-check': ['warn'],

    /**
     * @see {@link https://typescript-eslint.io/rules/triple-slash-reference}
     */
    '@typescript-eslint/triple-slash-reference': [
      'warn',
      { lib: 'always', path: 'never', types: 'prefer-import' },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/typedef}
     */
    '@typescript-eslint/typedef': [
      'off',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: false,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: false,
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/unbound-method}
     */
    '@typescript-eslint/unbound-method': ['warn', { ignoreStatic: false }],

    /**
     * @see {@link https://typescript-eslint.io/rules/unified-signatures}
     */
    '@typescript-eslint/unified-signatures': [
      'warn',
      { ignoreDifferentlyNamedParameters: true },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/default-param-last}
     */
    '@typescript-eslint/default-param-last': ['warn'],
    'default-param-last': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/dot-notation}
     */
    '@typescript-eslint/dot-notation': [
      'warn',
      {
        allowKeywords: true,
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
        allowIndexSignaturePropertyAccess: false,
      },
    ],
    'dot-notation': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/init-declarations}
     */
    '@typescript-eslint/init-declarations': ['warn'],
    'init-declarations': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-array-constructor}
     */
    '@typescript-eslint/no-array-constructor': ['warn'],
    'no-array-constructor': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-dupe-class-members}
     */
    '@typescript-eslint/no-dupe-class-members': ['error'],
    'no-dupe-class-members': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-duplicate-imports}
     */
    '@typescript-eslint/no-duplicate-imports': ['warn'],
    'no-duplicate-imports': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-empty-function}
     */
    '@typescript-eslint/no-empty-function': [
      'warn',
      {
        allow: ['private-constructors', 'protected-constructors'],
      },
    ],
    'no-empty-function': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-extra-semi}
     */
    '@typescript-eslint/no-extra-semi': ['warn'],
    'no-extra-semi': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-implied-eval}
     */
    '@typescript-eslint/no-implied-eval': ['warn'],
    'no-implied-eval': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-invalid-this}
     */
    '@typescript-eslint/no-invalid-this': ['warn'],
    'no-invalid-this': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-loop-func}
     */
    '@typescript-eslint/no-loop-func': ['warn'],
    'no-loop-func': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-loss-of-precision}
     */
    '@typescript-eslint/no-loss-of-precision': ['warn'],
    'no-loss-of-precision': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-magic-numbers}
     */
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignore: [0, 1, 2],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
        enforceConst: true,
        detectObjects: false,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],
    'no-magic-numbers': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-redeclare}
     */
    '@typescript-eslint/no-redeclare': [
      'warn',
      { ignoreDeclarationMerge: true },
    ],
    'no-redeclare': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-restricted-imports}
     */
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      { allowTypeImports: true },
    ],
    'no-restricted-imports': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-shadow}
     */
    '@typescript-eslint/no-shadow': [
      'warn',
      {
        builtinGlobals: false,
        hoist: 'functions',
        allow: [],
        ignoreOnInitialization: true,
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    'no-shadow': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-throw-literal}
     */
    '@typescript-eslint/no-throw-literal': [
      'warn',
      {
        allowThrowingAny: false,
        allowThrowingUnknown: true,
      },
    ],
    'no-throw-literal': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-unused-expressions}
     */
    '@typescript-eslint/no-unused-expressions': ['warn'],
    'no-unused-expressions': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-unused-vars}
     */
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-unused-vars': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-use-before-define}
     */
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: false,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: true,
      },
    ],
    'no-use-before-define': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/no-useless-constructor}
     */
    '@typescript-eslint/no-useless-constructor': ['warn'],
    'no-useless-constructor': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/require-await}
     */
    '@typescript-eslint/require-await': ['warn'],
    'require-await': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/return-await}
     */
    '@typescript-eslint/return-await': ['warn', 'in-try-catch'],
    'no-return-await': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/brace-style}
     */
    '@typescript-eslint/brace-style': ['warn', '1tbs'],
    'brace-style': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/comma-dangle}
     */
    '@typescript-eslint/comma-dangle': ['warn', 'only-multiline'],
    'comma-dangle': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/comma-spacing}
     */
    '@typescript-eslint/comma-spacing': ['warn'],
    'comma-spacing': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/func-call-spacing}
     */
    '@typescript-eslint/func-call-spacing': ['warn', 'never'],
    'func-call-spacing': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/indent}
     */
    '@typescript-eslint/indent': ['warn', 2],
    indent: 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/keyword-spacing}
     */
    '@typescript-eslint/keyword-spacing': [
      'warn',
      { before: true, after: true },
    ],
    'keyword-spacing': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/lines-between-class-members}
     */
    '@typescript-eslint/lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterSingleLine: true, exceptAfterOverload: true },
    ],
    'lines-between-class-members': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/member-delimiter-style}
     */
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'comma' },
        multilineDetection: 'brackets',
      },
    ],

    /**
     * @see {@link https://typescript-eslint.io/rules/no-extra-parens}
     */
    '@typescript-eslint/no-extra-parens': [
      'warn',
      'all',
      { ignoreJSX: 'multi-line' },
    ],
    'no-extra-parens': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/object-curly-spacing}
     */
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    'object-curly-spacing': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/padding-line-between-statements}
     */
    '@typescript-eslint/padding-line-between-statements': 'off',
    'padding-line-between-statements': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/quotes}
     */
    '@typescript-eslint/quotes': ['warn', 'single'],
    quotes: 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/semi}
     */
    '@typescript-eslint/semi': ['warn', 'never'],
    semi: 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/space-before-blocks}
     */
    '@typescript-eslint/space-before-blocks': ['warn', 'always'],
    'space-before-blocks': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/space-infix-ops}
     */
    '@typescript-eslint/space-infix-ops': ['warn'],
    'space-infix-ops': 'off',

    /**
     * @see {@link https://typescript-eslint.io/rules/type-annotation-spacing}
     */
    '@typescript-eslint/type-annotation-spacing': [
      'warn',
      { before: false, after: true },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        /**
         * @see {@link https://typescript-eslint.io/rules/explicit-function-return-type}
         */
        '@typescript-eslint/explicit-function-return-type': [
          'off',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            allowedNames: [],
          },
        ],

        /**
         * @see {@link https://typescript-eslint.io/rules/no-require-imports}
         */
        '@typescript-eslint/no-require-imports': ['warn'],

        /**
         * @see {@link https://typescript-eslint.io/rules/no-unsafe-argument}
         */
        '@typescript-eslint/no-unsafe-argument': ['warn'],

        /**
         * @see {@link https://typescript-eslint.io/rules/no-unsafe-assignment}
         */
        '@typescript-eslint/no-unsafe-assignment': ['off'],

        /**
         * @see {@link https://typescript-eslint.io/rules/no-unsafe-call}
         */
        '@typescript-eslint/no-unsafe-call': ['warn'],

        /**
         * @see {@link https://typescript-eslint.io/rules/no-unsafe-member-access}
         */
        '@typescript-eslint/no-unsafe-member-access': ['warn'],

        /**
         * @see {@link https://typescript-eslint.io/rules/no-unsafe-return}
         */
        '@typescript-eslint/no-unsafe-return': ['warn'],

        /**
         * @see {@link https://typescript-eslint.io/rules/no-var-requires}
         */
        '@typescript-eslint/no-var-requires': ['warn'],
      },
    },
  ],
}
