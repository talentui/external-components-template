import React, { Component } from "react";

export default class Button extends Component {
  static canBroadcast = true;

  static getEditProps() {
      return [{
          pType: 'SetButton',
          name: '设置按钮',
          key: 'buttons',
          defaultValue: [],
      }]
  }
  handleConnction(eventKey,e){
      e.stopPropagation();
      let {broadcast} = this.props;
      if(typeof(broadcast)==='function') broadcast(eventKey, 'fdfjdlfjdlsajfldsajfdls');
  }
  renderButtons() {
      let {buttons} = this.props.data;
      if(buttons.length === 0) return <div>No button</div>
      return buttons.map((item, index) => {
          return <div className="btn-group" role="group" aria-label="..." key={index}>
              <button type="button" className={"btn " + item.type} onClick={this.handleConnction.bind(this, item.eventKey)}>{item.text}</button>
          </div>
      })
  }
  render() {
    let { mode, registerBroadcasting } = this.props;
    return (
      <div
        className="comp-button-group btn-toolbar"
        role="toolbar"
        aria-label="..."
      >
        {this.renderButtons()}
      </div>
    );
  }
}
