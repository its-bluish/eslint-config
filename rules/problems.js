const rules = {
  /**
   * @see {@link https://eslint.org/docs/latest/rules/array-callback-return}
   */
  'array-callback-return': [
    'error',
    { allowImplicit: false, checkForEach: false },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/constructor-super}
   */
  'constructor-super': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/for-direction}
   */
  'for-direction': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/getter-return}
   */
  'getter-return': ['error', { allowImplicit: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-async-promise-executor}
   */
  'no-async-promise-executor': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-await-in-loop}
   */
  'no-await-in-loop': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-class-assign}
   */
  'no-class-assign': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-compare-neg-zero}
   */
  'no-compare-neg-zero': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-cond-assign}
   */
  'no-cond-assign': ['error', 'except-parens'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-const-assign}
   */
  'no-const-assign': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-constant-binary-expression}
   */
  'no-constant-binary-expression': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-constant-condition}
   */
  'no-constant-condition': ['error', { checkLoops: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-constructor-return}
   */
  'no-constructor-return': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-control-regex}
   */
  'no-control-regex': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-debugger}
   */
  'no-debugger': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-args}
   */
  'no-dupe-args': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-class-members}
   */
  'no-dupe-class-members': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-else-if}
   */
  'no-dupe-else-if': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-keys}
   */
  'no-dupe-keys': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-case}
   */
  'no-duplicate-case': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-imports}
   */
  'no-duplicate-imports': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-character-class}
   */
  'no-empty-character-class': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-pattern}
   */
  'no-empty-pattern': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-ex-assign}
   */
  'no-ex-assign': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-fallthrough}
   */
  'no-fallthrough': ['error', { commentPattern: void 0, allowEmptyCase: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-func-assign}
   */
  'no-func-assign': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-import-assign}
   */
  'no-import-assign': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-inner-declarations}
   */
  'no-inner-declarations': ['error', 'both'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-invalid-regexp}
   */
  'no-invalid-regexp': ['error', { allowConstructorFlags: void 0 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-irregular-whitespace}
   */
  'no-irregular-whitespace': [
    'error',
    {
      skipStrings: true,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: true,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-loss-of-precision}
   */
  'no-loss-of-precision': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-misleading-character-class}
   */
  'no-misleading-character-class': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new-native-nonconstructor}
   */
  'no-new-native-nonconstructor': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-new-symbol}
   */
  'no-new-symbol': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-obj-calls}
   */
  'no-obj-calls': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-promise-executor-return}
   */
  'no-promise-executor-return': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-prototype-builtins}
   */
  'no-prototype-builtins': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-self-assign}
   */
  'no-self-assign': ['error', { props: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-self-compare}
   */
  'no-self-compare': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-setter-return}
   */
  'no-setter-return': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-sparse-arrays}
   */
  'no-sparse-arrays': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-template-curly-in-string}
   */
  'no-template-curly-in-string': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-this-before-super}
   */
  'no-this-before-super': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-undef}
   */
  'no-undef': ['error', { typeof: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unexpected-multiline}
   */
  'no-unexpected-multiline': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unmodified-loop-condition}
   */
  'no-unmodified-loop-condition': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unreachable}
   */
  'no-unreachable': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unreachable-loop}
   */
  'no-unreachable-loop': ['error', { ignore: void 0 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-finally}
   */
  'no-unsafe-finally': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-negation}
   */
  'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining}
   */
  'no-unsafe-optional-chaining': [
    'error',
    { disallowArithmeticOperators: false },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-private-class-members}
   */
  'no-unused-private-class-members': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-vars}
   */
  'no-unused-vars': [
    'error',
    {
      vars: 'all',
      varsIgnorePattern: void 0,
      args: 'all',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: false,
      destructuredArrayIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: void 0,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-use-before-define}
   */
  'no-use-before-define': [
    'error',
    {
      functions: true,
      classes: true,
      variables: true,
      allowNamedExports: false,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-backreference}
   */
  'no-useless-backreference': ['error'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/require-atomic-updates}
   */
  'require-atomic-updates': ['error', { allowProperties: false }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/use-isnan}
   */
  'use-isnan': [
    'error',
    { enforceForSwitchCase: true, enforceForIndexOf: true },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/valid-typeof}
   */
  'valid-typeof': ['error', { requireStringLiterals: true }],
}

module.exports = { rules }
