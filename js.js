const { resolve } = require('./tools/resolve')

module.exports = {
  extends: [
    '<rules>/problems',
    '<rules>/suggestions',
    '<rules>/style',
    '<rules>/prettier',
  ].map(resolve),
}
