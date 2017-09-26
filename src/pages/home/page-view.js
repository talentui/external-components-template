import React, { Component } from 'react';
import GridWorkspace, { TubState } from '@beisen/grid-page-builder';
// import '@beisen/grid-page-builder/style.css';
import TemplateTwoColumn from '../../components/PageTemplates/TemplateTwoColumn';
import FreeLayout from '../../components/PageTemplates/FreeLayout'
import components from '../../components/ElementCollection';
import propsComponents from '../../components/PropsCollection';
import { v1 } from 'uuid';

export default class Grid extends Component {

  constructor(props, contents) {
    super();
    this.state = { tubState: TubState.create({
      pageSettings:{
        title: 'TalentUI-北森',
        editableData: {},
        layout: 'grid'
    }}) };
    this.availableComponent = this.genAvailableComponent()
  }

  genAvailableComponent() {
    return [{
      name: '容器组件',
      id: v1(),
      components: [{
        name: 'ComponentHolder',
        id: v1()
      }]
    },{
      name: '外部组件',
      id: v1(),
      components: [{
        name: 'ITalentWiget',
        displayTitle: '百毒',
        id: v1()
      }]
    }, {
      name: '动态组件',
      id: v1(),
      components: [{
        name: 'FeedTask',
        id: v1(),
        displayTitle: '任务列表'
      }]
    },{
      name: '初始组件',
      components: [{
        name: 'ButtonGroup',
        id: v1(),
        displayTitle: '按钮组'
      },{
        name: 'Header',
        id: v1(),
        displayTitle: '标题',
        gridInitSize:{w:3,h:20}
        
      },{
        name: 'Text',
        id: v1(),
        displayTitle: '文本展示',
        gridInitSize:{w:5,h:10}
      }]
    }]
  }

  handleChange = (tubState) => {
    this.setState({ tubState })
  }

  handleSave = (tubState) => {
    window.localStorage.uibuilder = JSON.stringify(tubState);
    this.state.tubState.setSavedState();
    debugger;
  }

  renderComponent = (Comp, editableData, mergeProps /* */) => {
    return <div>1111<Comp data={editableData} {...mergeProps} /></div>
  }

  genId(data) {
    console.log(data);
    return v1();
  }

  createComponent(component, data){
    return component
  }

  render() {

    return (
      <GridWorkspace
        tubState={this.state.tubState}
        template={FreeLayout}
        components={components}
        propsComponents={propsComponents}
        availableComponents={this.availableComponent}
        onChange={this.handleChange}
        onSave={this.handleSave}
        genUID={this.genId}
        onMessage={this.handleMessage}
        createComponent = {this.createComponent}
        previewUrl='#/gview'
        />
    );
  }
}
