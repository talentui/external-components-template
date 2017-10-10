# 前言
在upaas-protal 项目的开发中，我们引入了pageBuilder，通过前端页面的组件化+pageBuilder强大的页面构建功能，满足不同租户下的差异化与个性化需求，并收获了很好的反馈。伴随着新首页的上线，越来越多的产品线开始了解到pageBuilder的强大功能，并尝试接入来给用户提供一种新颖独特的用户体验。

这就出现了几个问题，在upaas-protal项目中，pageBuilder是作为一个组件集成到项目中去的，包括页面的编辑和预览等。页面对应的组件也是直接在项目中开发，打包和上线。由此而造成的几个问题：
1. 伴随着组件的增加，项目体积越来越大，打包时间越来越长。
2. 由于单个组件而导致的bug，需要整个项目重新发版上线
3. 缺少外部组件引入和开发规范，其他产品线难以接入，如果想接入，其对应的组件代码也需要放到upaas-portal项目中，给pageBuilder的推广造成和大障碍

基于上面提到的几个问题，我们可以想到的理想化解决方案是这样子的：
1. 首先，关于页面搭建的部分，抽离出来，作为一个单独的应用，即关于pageBuilder的那部分功能
2. 制定一套外部组件开发和引入规范。组件单独开发，单独打包上线，然后作为外部资源，引入到pageBuilder应用中

pageBuilder单独的应用基本开发完成，即**ux-page-builder**，本项目就是解决第二个问题，用于外部组件的开发，调试，组件打包，dll打包等一系列的流程。

本方案是基于talent-ui-2.0一些列的打包工具实现的，包括**talent-ui-dll-webpack-config, talent-ui-webpack-config, talent-ui-component-webpack-config**

# 使用
先总体说下外部组件的开发和打包流程：

1. 组件开发和调试，包括**功能组件，属性组件，页面模版**
2. 打包为dll
3. dll发版，并同步线上资源
4. 注册到pageBuilder项目中

下面具体阐述下每个流程及其需要遵守的开发规范

## 组件开发和调试

在`src/components`文件下的开发对应的**功能组件，属性组件，和页面模版**，开发后的组件，可以在项目`yarn start`启动后直接在pageBuilder内调试。


项目中有一个演示用的功能组件`Button`，属性组件`SetButton`， 页面模版组件`TemplateTwoColumn`

![image](http://note.youdao.com/yws/api/personal/file/WEB5e9161ca63d5a4a7f01945962fe7f6b2?method=download&shareKey=179cfd3253b0e34286c04f854cdbfc5c)

**注：开发后的组件，需要在对应文件夹下的index文件内对外输出**

## 打包dll
在打包dll之前，需要配置下`src/dll-config`文件。
1. **projectName**：组件对应的项目名称，如**upaas**，在打包以后，会在`src/venders/`下生成对应的文件夹
2. **dllList**: 在打包dll的时候，为了防止重复打包，某些外部依赖是不能打包的，例如react等。
目前我们将一些常用的基础库打包为了`@beisen/talent-ui-dll-foundation`

然后执行**yarn build-dll 或者 npm run build-dll**

如果打包成功，会看到在`src/veners/`下看到对应的项目名称文件夹及其里面的组件代码，以及根目录下的`dist`下的`dll`代码

> 执行`yarn build-dll`之后，实际上webpack会执行两次打包，一次是将所有开发的组件代码作为组件的方式打包，生成到`src/verders/`目录下，然后，将打包出来的组件代码，打包为一个dll，注册到pageBuilder项目中去。第一次打包的目的，是保证在以后组件更新和发版的过程中，`manifest.json`文件内，组件代码目录保持不变。

## 发版

修改`package.json`内对应的信息，如`name` `version` ,执行发版。

`dll`虽然以`package`的形式发布，但是其资源在pageBuilder页面中是单独引入的，所以开发者需要将`dll`资源同步到服务器上，并提供一个可以访问的远程地址。

## 注册

注册时需要提供的信息有：

1. 项目名称，如`upaas`
2. 发布的`dll`包名称
3. 样式文件远程地址 
4. `dll` 资源远程地址

# 注意事项：

## 1. 静态资源及css

在组件开发中，组件内引用的静态资源，如图片等，需要开发者以绝对路径的形式将其引入，如一个远程cdn地址。

至于css，打包完成后，在`src/venders/项目名称/dist/`下会有一个`style.css`文件，开发者需要将这个样式文件放在远程服务器上，并在注册项目组件的时候将cdn地址连同其他信息一同提供给`pageBuilder`

## 2. 发版后的组件更新


# TodoList :
1. component打包过程中，样式问题
2. 组件打包发版成功后，注册到pageBuilder内时需要提供的信息：projectName, 依赖？
3. ~~talent-ui-dll-webpack-config 添加对dllList参数的支持，添加dllReferencePlugin--~~
4. talent-ui-component-webpack-cofig添加jsx支持 
5. 将`parse-dll`部分的逻辑抽离出来，单独发版
6. pageBuilder运行态也需要放到`ux-page-builder`项目中
