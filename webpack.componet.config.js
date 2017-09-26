module.exports = require('@beisen/talent-ui-component-webpack-config')({
  entry: './src/index.js',
  root: require('path').resolve(__dirname,'src/venders/upaas')
})