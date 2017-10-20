const path = require('path')
module.exports  = require('@talentui/webpack-config')({
    entry:'&/app.js',
    port:3003,
    hostPage:path.resolve(__dirname,'index.html'),
    dllList:['@talentui/dll-react'],
    moduleScope:path.resolve(__dirname,'./src'),
    language: 'mixed', //可选，default 'js' 可选 'ts', 'mixed',
    transformInclude: [],
    transformExclude:[]
})