# guld-env-cli

Universal wrapper for guld commands. Discovers `guld-*` commands and allows them to be called as `guld *` from the main script.

### Install

```
npm i -g guld-env-cli
```

### Usage

##### CLI

```
  Usage: guld-env [options] [command]

  Guld environment detection module.

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

##### Example Output

```
linux
Ubuntu Linux
18.04 bionic
node@10.5.0
```

