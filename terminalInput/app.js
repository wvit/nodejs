const program = require('commander')
program
    .version('0.0.1')
    .option('-l, --list [list]')
    .parse(process.argv)

console.log(program.list)
console.log(process.argv)