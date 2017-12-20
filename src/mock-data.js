const emptyResp = {
    Code: 200,
    HttpCode: 200,
    Messages: null,
    MessagesList: [],
    OperationObject: null,
    OperationResult: true
};
export const componentList = Object.assign({}, emptyResp, {
    OperationObject: [
        {
            name: "TestDemo",
            title: "测试应用",
            id: "1231231",
            components: [
                {
                    name: "Button",
                    title: "按钮",
                    id: "123123123"
                },
                {
                    name: "MyChart",
                    title: "图表",
                    id: "111"
                }
            ]
        }
    ]
});
export const pageData = Object.assign({}, emptyResp, {
    OperationObject: {
        pageSettings: {
            validateKey: null,
            objId: "0",
            objType: 2,
            pageId: "3f345eeb-b16c-48e1-b4f7-577a36597859",
            pageName: "",
            title: "测试页面",
            description: null,
            template: "mobile",
            layout: "grid",
            isPublish: true,
            editableData: {
                __background__: {
                    value:
                        "http://xfile4.tita.com/ux/upaas-portal/release/extras/images/pb004/010.png",
                    type: "IMAGE"
                },
                __toTop__: true
            },
            isEdited: true,
            isCanReset: false,
            isCanEdit: true,
            updateTime: "0001-01-01T00:00:00",
            pageObjectId: "94235746-7a4d-4b9e-a95f-f35ec56e6bb1",
            identityType: 0,
            identityId: null,
            pagePart: 0,
            pageType: 4,
            snapShot: "",
            versionName: "1.0",
            versionCode: 20,
            appId: 0
        },
        sectionList: [],
        rowList: null,
        componentList: [],
        broadcastingRegistry: [],
        globalEventsMap: []
    }
});
