import React, {Component, PropTypes} from 'react';

class Input extends Component {

    constructor(props, contents) {
        super(props, contents);
        this.state = { value: props.value };
    }

    handleChange(e) {
        let val = e.target.value;
        this.setState({ value: val });

    }

    handlePressEnter(e) {
        if (e.which === 13) {
            this.saveState(e.target.value)
        }
    }

    handleBlur(e) {
        this.saveState(e.target.value)
    }
    
    saveState(val){
        let {onChange} = this.props;
        onChange && onChange(val);
    }

    componentWillReceiveProps(props) {
        this.setState({
            value: props.value
        })
    }

    render() {
        let {placeholder} = this.props;
        return <input
            className='cm-form-input'
            type='text'
            value={this.state.value || ''}
            placeholder={placeholder}
            onChange={this.handleChange.bind(this) }
            onKeyPress={this.handlePressEnter.bind(this) }
            onBlur={this.handleBlur.bind(this) }
            />
    }
}

export default Input;