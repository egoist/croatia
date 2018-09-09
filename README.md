
# croatia

[![NPM version](https://img.shields.io/npm/v/croatia.svg?style=flat)](https://npmjs.com/package/croatia) [![NPM downloads](https://img.shields.io/npm/dm/croatia.svg?style=flat)](https://npmjs.com/package/croatia) [![CircleCI](https://circleci.com/gh/egoist/croatia/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/croatia/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

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

### spawn(cmd, [args], [opts])

The same as `child_process.spawn`. But `opts.stdio` is always `pipe`.

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
