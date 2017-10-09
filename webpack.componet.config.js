const {projectName} = require('./src/dll-config.js')
module.exports = require('@beisen/talent-ui-component-webpack-config')({
  entry: './src/index.js',
  root: require('path').resolve(__dirname,'src/venders/' + projectName)
})