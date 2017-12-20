/**在这里输出所有需要打包的组件**/
import eLementCollections from "./components/ElementCollection/index.js";
import propsCollections from "./components/PropsCollection/index.js";
import pageTemplate from "./components/PageTemplates/index";
__webpack_public_path__ = `//stnew03.beisen.com/ux/upaas/${
    process.env.rawName
}/release/dist/`; //全局变量名
window.pb_umd_components_lists = window.pb_umd_components_lists || [];
window.pb_umd_components_lists.push(process.env.library);
export default {
    eLementCollections: eLementCollections, //所有的组件
    propsCollections: propsCollections, //所有的属性组件
    pageTemplate: pageTemplate //页面模版组件
};
