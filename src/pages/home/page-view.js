/**
 * paeg-builder编辑态页面
 */
import React, { Component } from "react";
import Workspace, { TubState } from "@beisen/grid-page-builder";
import { v1 } from "uuid";
import * as services from "../../service";
import { getQueryString, getCurPageTemplate, mergeComponents } from "../../utils/index";
import { PARTS_MAP, BORDR_STYLE_MAP, GRID_MARGIN_MAP } from "../../constants";

export default class App extends Component {
    constructor(props) {
        super(props);
        // let components = mergeComponents();
        // this.eLementCollections = eLementCollections;
        // this.propsCollections = propsCollections;
        // this.templates = templates; //所有的模版集合
        this.curTemplate = null; //当前页面所用的模版
        this.state = {
            fetchingPage: true,
            fetchingComp: true,
            tubState: TubState.create()
        };
    }
    handleChange = tubState => {
        this.setState({ tubState });
    };
    //保存
    handleSave = tubState => {
        services.savePage({ tubState }).then(resp => {
            if (resp.Code === 200) {
                this.state.tubState.setSavedState();
            }
        });
    };
    componentDidMount() {
        this.fetchPage();
        this.getTempAvaliableComponents();
    }
    //获取页面数据
    fetchPage() {
        services.getPage().then(resp => {
            let { Code, OperationObject } = resp;
            if (Code === 200) {
                document.title = OperationObject.pageSettings.title; //页面title
                this.curTemplate = getCurPageTemplate({
                    page: resp.OperationObject
                });
                let {
                    componentFrame,
                    componentSpacing
                } = OperationObject.pageSettings;
                this.componentSpacing = componentSpacing;
                this.componentFrame = componentFrame;
                this.setState({
                    fetchingPage: false,
                    tubState: this.state.tubState.setDefault(OperationObject)
                });
            }
        });
    }
    //数据是从后端获取的 组件列表
    getTempAvaliableComponents = () => {
        services.getComponentList().then(res => {
            this.availableComponents = res.OperationObject;
            this.setState({
                fetchingComp: false
            });
        });
    };
    render() {
        
        let { fetchingComp, fetchingPage, tubState } = this.state;
        if (fetchingComp || fetchingPage) return null;
        let {
            eLementCollections,
            propsCollections,
            pageTemplate,
            availableComponents,
            curTemplate
        } = this;
        let a  = mergeComponents();
        return (
            <Workspace
                defaultProps={{
                    component: {
                        __border__: BORDR_STYLE_MAP[this.componentFrame]
                    },
                    page: {
                        __gridItemMargin__:
                            GRID_MARGIN_MAP[this.componentSpacing]
                    }
                }}
                tubState={tubState}
                components={mergeComponents()}
                // propsComponents={propsCollections}
                availableComponents={availableComponents}
                onSave={this.handleSave}
                onChange={this.handleChange}
                template={curTemplate}
                previewUrl={"?#preview"}
            />
        );
    }
}
