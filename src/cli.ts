#!/usr/bin/env node

import meow = require('meow')
import <%= camelModuleName %> = require('.')

const cli = meow(`
	Usage
		$ <%= moduleName %> [input]

	Options
		--foo  Lorem ipsum [Default: false]

	Examples
		$ <%= moduleName %>
		unicorns & rainbows
		$ <%= moduleName %> ponies
		ponies & rainbows
`)

console.log(<%= camelModuleName %>(cli.input[0] || 'unicorns'))
