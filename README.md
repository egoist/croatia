
# croatia

[![NPM version](https://img.shields.io/npm/v/croatia.svg?style=flat)](https://npmjs.com/package/croatia) [![NPM downloads](https://img.shields.io/npm/dm/croatia.svg?style=flat)](https://npmjs.com/package/croatia) [![travis](https://badgen.net/travis/egoist/croatia/master?a)](https://travis-ci.org/egoist/croatia)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Motivation

You want to clear the output of a child process when it exits without error, otherwise persist the output.

## Install

```bash
yarn add croatia
```

## Usage

```js
const { spawn } = require('croatia')

spawn('npm', ['install', 'pokemon', '--verbose'])
```

## Preview

This preview demonstrates:

- A successful `npm install`, the output will be cleared when succeeded.
- A failed `yarn install`, the output error will be persisted.

<img src="https://cdn.rawgit.com/egoist/63dee59b52f06bd4875c65ed283dd46a/raw/723a35cd0503bac792d93f221983dba0a74179d8/preview-croatia.svg" width="500" >

## API

### spawn(cmd, [args], [options])

Almost identical to `child_process.spawn`.

Returns a Promise which resolves to the created child process, the Promise will never be rejected.

#### options

All options in [child_process.spawn](https://nodejs.org/dist/latest-v10.x/docs/api/child_process.html#child_process_child_process_spawn_command_args_options) are available here, plus:

- `options.stdio` is always `[process.stdin, 'pipe', 'pipe']`
- `options.banner`: `string` Output a message before the process is spawned.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**croatia** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/croatia/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
