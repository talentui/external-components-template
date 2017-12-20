/***
 * 请求相关
 * **/
import request from "./utils/request";
import interfaces from "./interface.js";
import { isvId } from "./interface";
const mock = false;

/**
 * mock 装饰器函数
 */
const mockDecorator = fn => {
    if(mock){

    }
    return fn;
};

/**
 * 实际的数据请求方法
 */
export const getComponentList = () => {
    if (mock) {
        return new Promise(resolve =>
            resolve(interfaces.getComponentList.mock)
        );
    }
    return request(interfaces.getComponentList.path, {
        method: "GET"
    });
};
export const savePage = tubState => {
    if (mock) {
        return new Promise(resolve => {
            resolve({ Code: 200 });
        });
    }
    return request(interfaces.savePage.path, {
        method: "POST",
        body: {
            metaname: "PageBuilder",
            funname: "SavePage",
            isvId: isvId,
            uiInfo: tubState
        }
    });
};
export const getPage = pageId => {
    if (mock) {
        return new Promise(resolve => resolve(interfaces.getPage.mock));
    }
    return request(interfaces.getPage.path + pageId, {
        method: "GET"
    });
};
