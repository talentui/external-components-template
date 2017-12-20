/**
 * paeg-builder编辑态页面
 */
import React, { Component } from "react";
import Workspace, { TubState } from "@beisen/grid-page-builder";
import { v1 } from "uuid";
import template from "../../components/PageTemplates";
import * as services from "../../service";
import { getQueryString } from "../../utils/index";
import components from '../../components/ElementCollection'
import propsComponents from '../../components/PropsCollection'
export default class App extends Component {
    constructor(props) {
        super(props);
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
        services.savePage(tubState).then(resp => {
            if(resp.Code === 200){
                this.state.tubState.setSavedState();
            }
        });
    };
    componentDidMount() {
        this.fetchComp();
        this.fetchPage();
    }
    //获取组件列表
    fetchComp() {
        this.getTempAvaliableComponents();
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
        let { pageId } = getQueryString();
        services.getPage(pageId).then(resp => {
            if (resp.Code === 200) {
                document.title = resp.OperationObject.pageSettings.title;//页面title
                this.setState({
                    fetchingPage: false,
                    tubState: this.state.tubState.setDefault(resp.OperationObject)
                });
            }
        });
    }
    render() {
        let {fetchingComp, fetchingPage} = this.state;
        if (fetchingComp || fetchingPage) return null;
        let {
            availableComponents,
            tubState
        } = this.state;
        return (
            <Workspace
                tubState={tubState}
                components={components}
                propsComponents={propsComponents}
                availableComponents={availableComponents}
                onSave={this.handleSave}
                onChange={this.handleChange}
                template={template}
            />
        );
    }
}
