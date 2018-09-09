const { spawn } = require('..')

spawn('yarn', ['add', 'pokemonxxx'], {
  env: Object.assign({
    FORCE_COLOR: true,
    npm_config_color: 'always',
    npm_config_progress: true
  }, process.env),
  banner: 'Installing pokemon...'
}).catch(cp => {
  console.log(`Failed with code ${cp.exitCode}`)
})
