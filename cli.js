#!/usr/bin/env node
const { getJS, getDist, getOS, getRelease } = require('guld-env')
const program = require('commander')
const VERSION = require('./package.json').version

/* eslint-disable no-console */
async function printall () {
  console.log(await getOS())
  console.log(await getDist())
  console.log(await getRelease())
  console.log(getJS())
}

if (process.argv.length === 2) {
  printall()
} else {
  program
    .version(VERSION)
    .description('Guld environment detection module.')
    .command('js')
    .description('Get the JS execution environment (always node from CLI)')
    .action(function (cmd) {
      return console.log(getJS())
    })
  program
    .command('os')
    .description('Get the operating system.')
    .action(async function (cmd) {
      return console.log(await getOS())
    })
  program
    .command('dist')
    .description('Get the distro, if linux OS.')
    .action(async function (cmd) {
      return console.log(await getDist())
    })
  program
    .command('release')
    .description('Get the distro release, if linux OS.')
    .action(async function (cmd) {
      return console.log(await getRelease())
    })
  program
    .command('all')
    .description('Get the os, distro, release, and JS environment. In that order.')
    .action(async function (cmd) {
      printall()
    })
  program.parse(process.argv)
}
/* eslint-enable no-console */
