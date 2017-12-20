/***
 * 接口
 * **/
import BSGlobal from './BSGlobal';
export const uid = BSGlobal.loginUserInfo.Id;
export const tenantId = BSGlobal.tenantInfo.Id;
export const isvId = BSGlobal.isv

const baseUrlV1 =
    "//www." + BSGlobal.webPath + "/api/" + "v1/" + tenantId + "/" + uid;
const baseUrlV2 =
    "//www." + BSGlobal.webPath + "/api/" + "v2/" + tenantId + "/" + uid;
import * as mockData from './mock-data';

export default {
    getComponentList: {
        path: `${baseUrlV1}/proxy/GetUPaaSCoreGateway?metaname=PageBuilderManagement&funname=GetComponentList&pageType=4`,
        mock: mockData.componentList
    },
    savePage:{
        path:`${baseUrlV1}/proxy/PostUPaaSCoreGateway`,
        mock:null
    },
    getPage:{
        path:`${baseUrlV1}/proxy/GetUPaaSCoreGateway?metaname=PageBuilder&funname=GetPage&isvId=${isvId}&pageId=`,
        mock:mockData.pageData
    }
};
