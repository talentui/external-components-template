//属性组件
import React, { Component, PropTypes } from "react";
class Input extends Component {
    handleChange=(e)=>{
        this.props.update(e.target.value)
    }
    render() {
        let { data } = this.props;
        return (
            <div>
                <input type="text"  value={data} onChange= {this.handleChange}/>
            </div>
        );
    }
}

export default Input;
