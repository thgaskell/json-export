#! /usr/bin/env node
const path = require('path');

process.stdout.write(JSON.stringify(require(path.resolve(process.argv[2]))));
