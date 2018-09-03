#!/usr/bin/env node
// { getJS, getDist, getOS, getRelease }
const guldEnv = require('guld-env')
const program = require('commander')
const thispkg = require(`${__dirname}/package.json`)

/* eslint-disable no-console */
async function printall () {
  var os = await guldEnv.os()
  console.log(os.os)
  if (os.dist) console.log(os.dist)
  if (os.release) console.log(os.release)
  console.log(guldEnv.JS)
}

program
  .name(thispkg.name.replace('-cli', ''))
  .version(thispkg.version)
  .description(thispkg.description)
  .command('js')
  .description('Get the JS execution environment (always node from CLI)')
  .action(function (cmd) {
    return console.log(guldEnv.JS)
  })
program
  .command('os')
  .description('Get the operating system.')
  .action(async function (cmd) {
    return console.log((await guldEnv.os()).os)
  })
program
  .command('dist')
  .description('Get the distro, if linux OS.')
  .action(async function (cmd) {
    return console.log((await guldEnv.os()).dist)
  })
program
  .command('release')
  .description('Get the distro release, if linux OS.')
  .action(async function (cmd) {
    return console.log((await guldEnv.os()).release)
  })
program
  .command('all')
  .description('Get the os, distro, release, and JS environment. In that order.')
  .action(async function (cmd) {
    printall()
  })
if (process.argv.length === 2) {
  printall()
} else if (process.argv.length > 2) {
  program.parse(process.argv)
}
module.exports = program
/* eslint-enable no-console */
