import React, {Component, PropTypes} from 'react';
// import _ from 'lodash';

class Select extends Component {
    
    static requireData = true;
    
    handleValueChange(e){
        let {onChange=function(){}} = this.props;
        onChange(e.target.value);
    }
    
    render(){
        let {value} = this.props;
        return <select value={value} onChange={this.handleValueChange.bind(this)}>
            {this.renderOptions()}
        </select>    
    }
    
    renderOptions(){
        // var strArr = '[object Array]';
        var strObj = '[object Object]';
        let {options = []} = this.props;
        // debugger;
        
        if(options.length>0) return options.map((item,index) =>{
            let tp =Object.prototype.toString.call(item);  
            if(tp === strObj){
                return  <option value={item.value} key={index}>{item.label}</option>  
            }else{
                return <option value={item} key={index}>{item}</option>
            }
        })
        return <option>默认值</option>
    }
    
}

export default Select;