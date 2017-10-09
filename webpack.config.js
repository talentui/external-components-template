const path = require('path')
module.exports  = require('@beisen/talent-ui-webpack-config')({
    entry:'&/app.js',
    port:3003,
    hostPage:path.resolve(__dirname,'index.html'),
    dllList:['@beisen/talent-ui-dll-foundation'],
    moduleScope:path.resolve(__dirname,'./src'),
    language: 'mixed', //可选，default 'js' 可选 'ts', 'mixed',
    transformInclude: [],
    transformExclude:[]
})