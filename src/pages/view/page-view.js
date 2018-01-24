//pageBuilder 运行态页面
/**
 * paeg-builder编辑态页面
 */
import React, { Component } from "react";
import Workspace, { TubState, Viewer } from "@beisen/grid-page-builder";
import * as services from "../../service";
import { getCurPageTemplate,mergeComponents } from "../../utils/index";
import { PARTS_MAP, BORDR_STYLE_MAP, GRID_MARGIN_MAP } from "../../constants";

export default class App extends Component {
    constructor(props) {
        super(props);
        let {
            eLementCollections,
            propsCollections,
            templates
        } = mergeComponents();
        this.eLementCollections = eLementCollections;
        this.propsCollections = propsCollections;
        this.templates = templates; //所有的模版集合
        this.curTemplate = null; //当前页面所用的模版
        this.state = {
            fetchingPage: true,
            tubState: TubState.create()
        };
    }
    handleChange = tubState => {
        this.setState({ tubState });
    };
    componentDidMount() {
        this.fetchPage();
    }
    //数据是从后端获取的 组件列表
    getTempAvaliableComponents = () => {
        services.getComponentList().then(res => {
            this.setState({
                availableComponents: res.OperationObject,
                fetchingComp: false
            });
        });
    };
    //获取页面数据
    fetchPage() {
        services.getPage().then(resp => {
            if (resp.Code === 200) {
                this.curTemplate = getCurPageTemplate({
                    page: resp.OperationObject
                });
                document.title = resp.OperationObject.pageSettings.title; //页面title
                this.setState({
                    fetchingPage: false,
                    tubState: this.state.tubState.setContent(
                        resp.OperationObject
                    )
                });
            }
        });
    }
    render() {
        let { fetchingComp, fetchingPage } = this.state;
        if (fetchingComp || fetchingPage) return null;
        let { tubState } = this.state;
        let { eLementCollections, curTemplate } = this;
        return (
            <Viewer
                tubState={tubState}
                components={eLementCollections}
                onChange={this.handleChange}
                template={curTemplate}
            />
        );
    }
}
