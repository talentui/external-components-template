const {dllList, library} = require('./src/component-config.js')
module.exports = require('./webpack-library-config')({
  entry: './src/index.js',
  root: require('path').resolve(__dirname),
  dllList: dllList,
  library: library
})