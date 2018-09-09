const spawn = require('cross-spawn')
const stripAnsi = require('strip-ansi')
const wcwidth = require('wcwidth')

exports.spawn = (cmd, args, opts) =>
  new Promise((resolve, reject) => {
    const cp = spawn(
      cmd,
      args,
      Object.assign({}, opts, {
        stdio: 'pipe'
      })
    )

    let output = ''
    const stream = process.stderr

    cp.stdout.setEncoding('utf8').on('data', data => {
      output += data
      stream.write(data)
    })

    cp.stderr.setEncoding('utf8').on('data', data => {
      output += data
      stream.write(data)
    })

    cp.on('close', code => {
      // Clear output when succeeded
      if (code === 0) {
        const columns = stream.columns || 80
        const lineCount = stripAnsi(output)
          .split('\n')
          .reduce((count, line) => {
            return count + Math.max(1, Math.ceil(wcwidth(line) / columns))
          }, 0)
        for (let i = 0; i < lineCount; i++) {
          if (i > 0) {
            stream.moveCursor(0, -1)
          }
          stream.clearLine()
          stream.cursorTo(0)
        }
        resolve(cp)
      } else {
        reject(cp)
      }
    })
  })
