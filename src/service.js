/***
 * 请求相关
 * **/
import request from "./utils/request";
import { isvId } from "./interface";
import { getLocalComponentList } from "./utils/index";
import { emptyResp } from "./mock-data";
import interfaces from "./interface";

/**
 * 实际的数据请求方法
 * 这里返回本地调试的组件列表
 */
export const getComponentList = () => {
    return new Promise(resolve => {
        resolve(getLocalComponentList());
    });
};
export const savePage = tubState => {
    return new Promise(resolve => {
        window.localStorage.setItem(
            "__localPageData__",
            JSON.stringify(tubState)
        );
        resolve({ Code: 200 });
    });
};
export const getPage = pageId => {
    let localPage = window.localStorage.getItem("__localPageData__");
    return new Promise(resolve =>
        resolve(
            localPage
                ? Object.assign({}, emptyResp, {
                      OperationObject: JSON.parse(localPage)
                  })
                : interfaces.getPage.mock
        )
    );
};
