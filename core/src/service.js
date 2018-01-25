/***
 * 请求相关
 * **/
import request from "./utils/request";
import interfaces from "./interface.js";
import { isvId } from "./interface";
import { getQueryString, componentTransfer } from "./utils/index";

const mock = window.location.hostname == "localhost";
/**
 * 从url中读取参数配置 pageCode pageId(可能废除) isDev
 */
let { pageId = "", pageCode, isDev = false } = getQueryString(); //pageId 可以不传，pageCode必须，isDev是否是开发环境默认页面配置

/**
 * mock 装饰器函数
 */
const mockDecorator = fn => {
    if (mock) {
    }
    return fn;
};

/**
 * 实际的数据请求方法
 */
export const getComponentList = () => {
    return new Promise(resolve => resolve(interfaces.getComponentList.mock));
};
export const savePage = ({ tubState }) => {
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
            uiInfo: tubState,
            isDev: isDev
        }
    });
};
export const getPage = () => {
    if (mock) {
        return new Promise(resolve => resolve(interfaces.getPage.mock));
    }
    return request(
        `${
            interfaces.getPage.path
        }pageId=${pageId}&pageCode=${pageCode}&isDev=${isDev}`,
        {
            method: "GET"
        }
    );
};
