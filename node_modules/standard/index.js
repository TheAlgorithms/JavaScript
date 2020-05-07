const Linter = require('standard-engine').linter
const opts = require('./options')

module.exports = new Linter(opts)
