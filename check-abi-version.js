let nodeAbi = require('node-abi')
let node = 'node'
let electron = 'electron'
console.log(`${node}:`, nodeAbi.getAbi('12.13.1', node))
console.log(`${electron}:`, nodeAbi.getAbi('8.0.0', electron))
