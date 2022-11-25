/* eslint-disable @typescript-eslint/no-magic-numbers */
const rules = {
  /**
   * @see {@link https://eslint.org/docs/latest/rules/array-bracket-newline}
   */
  'array-bracket-newline': ['warn', 'consistent'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/array-bracket-spacing}
   */
  'array-bracket-spacing': ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/array-element-newline}
   */
  'array-element-newline': ['warn', 'consistent'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/arrow-parens}
   */
  'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/arrow-spacing}
   */
  'arrow-spacing': ['warn', { before: true, after: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/block-spacing}
   */
  'block-spacing': ['warn', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/brace-style}
   */
  'brace-style': ['warn', '1tbs'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/comma-dangle}
   */
  'comma-dangle': ['warn', 'only-multiline'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/comma-spacing}
   */
  'comma-spacing': ['warn', { before: false, after: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/comma-style}
   */
  'comma-style': ['warn', 'last'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/computed-property-spacing}
   */
  'computed-property-spacing': ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/dot-location}
   */
  'dot-location': ['warn', 'property'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/eol-last}
   */
  'eol-last': ['warn', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/func-call-spacing}
   */
  'func-call-spacing': ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/function-call-argument-newline}
   */
  'function-call-argument-newline': ['warn', 'consistent'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/function-paren-newline}
   */
  'function-paren-newline': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/generator-star-spacing}
   */
  'generator-star-spacing': [
    'warn',
    {
      before: true,
      after: false,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/implicit-arrow-linebreak}
   */
  'implicit-arrow-linebreak': ['warn', 'beside'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/indent}
   */
  indent: ['warn', 2],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/jsx-quotes}
   */
  'jsx-quotes': ['warn', 'prefer-single'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/key-spacing}
   */
  'key-spacing': [
    'warn',
    {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/keyword-spacing}
   */
  'keyword-spacing': ['warn', { before: true, after: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/line-comment-position}
   */
  'line-comment-position': ['warn', { position: 'above' }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/linebreak-style}
   */
  'linebreak-style': ['warn', 'unix'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/lines-around-comment}
   */
  'lines-around-comment': [
    'warn',
    {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowClassStart: true,
      allowObjectStart: true,
      allowArrayStart: true,
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/lines-between-class-members}
   */
  'lines-between-class-members': [
    'warn',
    'always',
    { exceptAfterSingleLine: true },
  ],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-len}
   */
  'max-len': ['warn', 90],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/max-statements-per-line}
   */
  'max-statements-per-line': ['warn', { max: 1 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/multiline-ternary}
   */
  'multiline-ternary': ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/new-parens}
   */
  'new-parens': ['warn', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/newline-per-chained-call}
   */
  'newline-per-chained-call': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-parens}
   */
  'no-extra-parens': ['warn', 'all', { ignoreJSX: 'multi-line' }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs}
   */
  'no-mixed-spaces-and-tabs': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-multi-spaces}
   */
  'no-multi-spaces': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-multiple-empty-lines}
   */
  'no-multiple-empty-lines': ['warn', { max: 1 }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-tabs}
   */
  'no-tabs': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-trailing-spaces}
   */
  'no-trailing-spaces': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/no-whitespace-before-property}
   */
  'no-whitespace-before-property': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/nonblock-statement-body-position}
   */
  'nonblock-statement-body-position': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/object-curly-newline}
   */
  'object-curly-newline': ['warn', { consistent: true }],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/object-curly-spacing}
   */
  'object-curly-spacing': ['warn', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/object-property-newline}
   */
  'object-property-newline': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/operator-linebreak}
   */
  'operator-linebreak': ['warn', 'none'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/padded-blocks}
   */
  'padded-blocks': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/padding-line-between-statements}
   */
  'padding-line-between-statements': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/quotes}
   */
  quotes: ['warn', 'single'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/rest-spread-spacing}
   */
  'rest-spread-spacing': ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/semi}
   */
  semi: ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/semi-spacing}
   */
  'semi-spacing': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/semi-style}
   */
  'semi-style': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/space-before-blocks}
   */
  'space-before-blocks': ['warn', 'always'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/space-before-function-paren}
   */
  'space-before-function-paren': ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/space-in-parens}
   */
  'space-in-parens': ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/space-infix-ops}
   */
  'space-infix-ops': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/space-unary-ops}
   */
  'space-unary-ops': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/switch-colon-spacing}
   */
  'switch-colon-spacing': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/template-curly-spacing}
   */
  'template-curly-spacing': ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/template-tag-spacing}
   */
  'template-tag-spacing': ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/unicode-bom}
   */
  'unicode-bom': ['warn', 'never'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/wrap-iife}
   */
  'wrap-iife': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/wrap-regex}
   */
  'wrap-regex': ['off'],

  /**
   * @see {@link https://eslint.org/docs/latest/rules/yield-star-spacing}
   */
  'yield-star-spacing': ['warn', 'both'],
}

module.exports = { rules }
