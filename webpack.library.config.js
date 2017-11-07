const {dllList} = require('./src/component-config.js')
const fs = require('fs');
const obj = JSON.parse(fs.readFileSync(('./package.json'),'utf8'));
const rawName = obj.name;
const library = rawName.replace(/@|\-|\//g,'_');//以package name作为全局的变量名
module.exports = require('@talentui/webpack-library-config')({
  entry: './src/index.js',
  root: require('path').resolve(__dirname),
  dllList: dllList,
  library: library
})