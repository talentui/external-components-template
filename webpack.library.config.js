const {dllList} = require('./src/component-config.js')
module.exports = require('@talentui/webpack-library-config')({
  entry: './src/index.js',
  root: require('path').resolve(__dirname),
  dllList: dllList
})