const path = require('path');
const {dllList} = require('./src/dll-config.js')
console.log(dllList)
module.exports = require('@beisen/talent-ui-dll-webpack-config')({
  root: path.resolve(__dirname),
  venders: ['./src/venders/upaas/dist/index.js'],
  dllList: dllList
});