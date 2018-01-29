import React, { Component } from "react";
import Input from './Input'
export default class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static getEditProps() {
        return [
            {
                pType: Input,
                name: "编辑内容",
                key: "value"
            }
        ];
    }
    render() {
        let { mode,data } = this.props;
        if (mode == 2) {
            return <div>{data.value}</div>;
        }
    }
}
