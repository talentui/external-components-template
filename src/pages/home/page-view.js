import React, { Component } from 'react';
import GridWorkspace, { TubState } from '@beisen/grid-page-builder';
// import '@beisen/grid-page-builder/style.css';
import TemplateTwoColumn from '../../components/PageTemplates/index';
import FreeLayout from '../../components/PageTemplates/FreeLayout'
import components from '../../components/ElementCollection';
import propsComponents from '../../components/PropsCollection';
import { v1 } from 'uuid';
import componentListData from './componentListData'

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
    return componentListData;
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
        previewUrl='#/preview'
        />
    );
  }
}
