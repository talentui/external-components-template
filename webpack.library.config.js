const {dllList} = require('./src/dll-config.js')
module.exports = require('@talentui/webpack-library-config')({
  entry: '@talentui/external-component-template-core/src/index.js',
  root: require('path').resolve(__dirname),
  dllList: dllList,
  moduleScope:require('path').resolve(__dirname, "./src")
})