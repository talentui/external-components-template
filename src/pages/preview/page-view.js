
import React, {Component, PropTypes} from 'react';
import Elements from '../../components/ElementCollection';
import FreeLayout from '../../components/PageTemplates/FreeLayout'
import {Viewer, TubState} from '@beisen/grid-page-builder';
// import '@beisen/grid-page-builder/style.css';

export default class View extends Component{
    constructor(props){
        super(props)
        let data = JSON.parse(window.localStorage._tubState)
        this.state = {
            tubState: TubState.create(data)
        }
    }

    renderComponent = (Comp,data, mergeProps) => {
        
        return <div><Comp data={data} {...mergeProps}/></div>
        
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            tubState: tubState.setContent(nextProps.data)
        });
    }
    
    render(){
        return <Viewer
                tubState={this.state.tubState}
                components={Elements} 
                onChange={(tubState) => {this.setState({tubState})}}
                template={FreeLayout}
            />
    }
}
