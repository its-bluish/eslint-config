const { resolve } = require('./tools/resolve')

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '<rules>/problems',
    '<rules>/suggestions',
    '<rules>/style',
    '<rules>/typescript',
    '<rules>/prettier',
  ].map(resolve),
}
