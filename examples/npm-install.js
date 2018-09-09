const { spawn } = require('..')

spawn('npm', ['install', '--verbose'], {
  env: Object.assign({
    FORCE_COLOR: true,
    npm_config_color: 'always',
    npm_config_progress: true
  }, process.env),
  cwd: __dirname
}).then(cp => {
  console.log(`Succeeded with code ${cp.exitCode}`)
})
