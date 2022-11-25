const path = require('path')

module.exports.resolve = function resolve(rule) {
  return rule.replace(/<rules>/, path.join(__dirname, '..', 'rules'))
}
