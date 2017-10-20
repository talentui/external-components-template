/**
 * 打包 DLL 的一些配置
 * 
 * 1. projectName：项目组件名称，如upaas，在打包以后，会在src/venders/下生成对应的文件夹
 * 
 * 2. dllList: 在打包dll的时候，为了防止重复打包，某些外部依赖是不能打包的，例如react等
 * @beisen/talent-ui-dll-foundation是使用Webpack DllPlugin打包出来的dll 基本上等于talent-libs
 * 依赖的公共组件是否需要打包为一个dll  ？
 * **/
module.exports = {
  projectName:'upaas',
  dllList: ['@talentui/dll-react', '@talentui/dll-ethos']
}