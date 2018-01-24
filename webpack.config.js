const path = require("path");
module.exports = require("@talentui/webpack-config")({
    entry: path.resolve(__dirname, "./src/app.js"),
    port: 3000,
    hostPage: path.resolve(__dirname, "index.html"),
    dllList: ["@talentui/dll-react"],
    moduleScope: path.resolve(__dirname, "./template"),
    language: "mixed", //可选，default 'js' 可选 'ts', 'mixed',
    transformInclude: [],
    transformExclude: [],
    alias:{
        '&':'./src'
    }
});
