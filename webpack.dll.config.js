const path = require('path');
const {dllList, projectName} = require('./src/dll-config.js')
module.exports = require('./talent-ui-dll-webpack-config')({
  root: path.resolve(__dirname),
  venders: ['./src/venders/'+projectName+'/dist/index.js'],
  dllList: dllList
});