const {dllList, libraryName} = require('./src/component-config.js')
module.exports = require('./webpack-config')({
  entry: './src/index.js',
  root: require('path').resolve(__dirname),
  dllList: dllList,
  libraryName: libraryName,
  compress:true
})