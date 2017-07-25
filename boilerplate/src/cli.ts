#!/usr/bin/env node

import meow from 'meow'
import <%= camelModuleName %> from '.'

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

console.log(<%= camelModuleName %>(cli.input[0] || 'unicorns', cli.flags))
