import React from 'react';
import './love.scss';
import img from '&/statics/images/love.jpg'

export default props => {
    return <div className='love-page'>
        <span>爱自己，爱这个世界</span>
        <br />
        <img src={img} />
    </div>
}