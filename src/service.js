/***
 * 请求相关
 * **/
import request from "./utils/request";
import interfaces from "./interface.js";
import { isvId } from "./interface";
import { getQueryString, componentTransfer } from "./utils/index";

const mock = window.location.hostname == 'localhost';
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
    if (mock) {
        return new Promise(resolve =>
            resolve(interfaces.getComponentList.mock)
        );
    }
    return new Promise(resolve => {
        request(
            `${
                interfaces.getComponentList.path
            }pageId=${pageId}&pageCode=${pageCode}`,
            {
                method: "GET"
            }
        ).then(res => {
            //数据处理
            //要是是数字类型的，后端数据存储满足不了，暂时先在这里做兼容
            res.OperationObject.map(item => {
                item.components.map(comp => {
                    if (comp.gridInitSize) {
                        let { w, h } = comp.gridInitSize;
                        comp.gridInitSize.w = parseInt(w);
                        comp.gridInitSize.h = parseInt(h);
                    }
                });
            });
            componentTransfer(res.OperationObject);
            resolve(res);
        });
    });
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
