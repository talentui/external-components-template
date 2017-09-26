import React, {Component, PropTypes} from 'react';

class FreeLayout extends Component{
    
    render(){
        let {connectLayoutItem} = this.props;
        return connectLayoutItem('layout1', 8)(<div className='pg-tmpl-defaul'>
        </div>);
    }
}

export default FreeLayout;