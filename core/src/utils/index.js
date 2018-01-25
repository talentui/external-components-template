import { PARTS_MAP } from "../constants";
import innerTemplates from "@talentui/page-templates";
import components from '../../../src/index';
export function getQueryString() {
    //获取Url上的参数，以{}返回
    let hash = location.hash;
    let queryObject = {};
    let markIndex = hash.indexOf("?");
    // contain query string in fragments
    if (markIndex > -1) {
        // build query object
        let queryString = hash.slice(markIndex + 1);
        let queryArray = queryString.split("&");
        for (let i = 0; i < queryArray.length; i++) {
            let queryPair = queryArray[i].split("=");
            if (queryPair[0] !== "_k") {
                queryObject[queryPair[0]] = decodeURIComponent(queryPair[1]);
            }
        }
    }
    return queryObject;
}
//依据页面信息获取当前页面所用的页面模版
export const getCurPageTemplate = ({ page }) => {
    let templates = innerTemplates.pbTemplates;
    let { template, parts } = page.pageSettings;
    if (templates[template]) return templates[template](PARTS_MAP[parts]);
    return templates["HomePage"](PARTS_MAP[parts]); //返回一个默认的
};
//得到本地的组件
export const mergeComponents = () => {
   return components;
};
//遍历组件列表，将普通iframe组件使用本地渲染
export const componentTransfer = apps => {
    apps.map(list => {
        list.components.map(comp => {
            if (comp.displayMode === 2) {
                let rawData = comp.editableData;
                Object.assign(comp, {
                    name: "CommonIframe",
                    data: {
                        url: comp.url
                    }
                });
            }
        });
    });
};
