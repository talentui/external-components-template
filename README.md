本模版项目用于开发外部组件。

# 创建项目

使用`@talentui/cli`工具生成项目模版，没有安装的同学执行下面的命令全局安装：
```
sudo yarn install @talentui/cli
```
项目创建完成后执行
```
npm install 
npm start
```
启动本地代理，打开pageBuilder的一个页面，即可看到本地开发的组件

# 开发

开发者在`src`目录下完成组件的业务开发，并在`src/index.js`文件内将组件输出。形式如下：
```javascript
import Button from '&/Button'  //alias & 就是访问项目的src目录
export default {
    Button
}
```

`dll-config.js`文件内是指组件开发中所依赖的dll列表，dll方案很好得解决了组件的依赖问题，防止出现多个组件包内相同依赖的重复打包问题。

目前我们提供两个dll：
* @talentui/dll-react
* @talentui/dll-recharts

默认使用react框架开发组件，使用`@talentui/dll-react`
如果您需要新增其他的dll，请联系我们

# 代码提交

每次在`master`分支提交后，就会触发一次`ci`构建，并生成一个对应的版本号。版本号即`package.json`文件内的`version`。如果希望生成一个新的版本，修改次字段即可。

> 建议: 我们建议新建一个分支进行日常的开发工作和代码提交。需要组件本版升级的时候，在master分支进行merge 和 提交。

# 上线

开发环境下，在[配置中心](dev.upaas-inc.cn)下，切换组件版本，实现组件上线和更新。