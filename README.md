# guld-env-cli

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-env-cli) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-env-cli/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/cli/guld-env-cli.html)

[![node package manager](https://img.shields.io/npm/v/guld-env-cli.svg)](https://www.npmjs.com/package/guld-env-cli) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-env-cli.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-env-cli?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-guld-env-cli.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-guld-env-cli/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-env-cli/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-env-cli) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-env-cli/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-env-cli?type=dev)

Guld environment detection CLI.

### Install

##### Node

```sh
npm i -g guld-env-cli
```

### Usage

##### CLI

```sh
guld-env --help

  Usage: guld-env [options] [command]

  Guld environment detection CLI.

  Options:

    -V, --version  output the version number
    -h, --help     output usage information

  Commands:

    js             Get the JS execution environment (always node from CLI)
    os             Get the operating system.
    dist           Get the distro, if linux OS.
    release        Get the distro release, if linux OS.
    all            Get the os, distro, release, and JS environment. In that order.

```

### License

MIT Copyright isysd

