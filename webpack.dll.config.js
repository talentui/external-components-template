const path = require('path');
module.exports = require('@beisen/talent-ui-dll-webpack-config')({
  root: path.resolve(__dirname),
  venders: ['./src/venders/upaas/dist/index.js']
});