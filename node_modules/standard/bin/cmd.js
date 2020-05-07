#!/usr/bin/env node

var match = process.version.match(/v(\d+)\.(\d+)/)
var major = parseInt(match[1], 10)
var minor = parseInt(match[2], 10)

if (major >= 9 || (major === 8 && minor >= 10)) {
  require('standard-engine').cli(require('../options'))
} else {
  console.error('standard: Node 8.10.0 or greater is required. `standard` did not run.')
}
