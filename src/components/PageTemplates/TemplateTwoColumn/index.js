import React, {Component, PropTypes} from 'react';
import './tmpl.scss';

class TemplateTwoColumn extends Component{
    
    render(){
        let {connectLayoutItem} = this.props;
        let el1 = connectLayoutItem('default1')(<div className="pg-tmpl-default1" />)
        let el2 = connectLayoutItem('default2')(<div className="pg-tmpl-default2" />)
        return <div className='pg-tmpl-defaul'>
            {el1}{el2}
        </div>;
    }
}

export default TemplateTwoColumn;