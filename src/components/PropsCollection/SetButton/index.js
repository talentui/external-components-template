import React, {Component} from 'react';
import Input from'./input'
import Select from './select'
// import _ from 'lodash';

const buttonTypes = [{
    value: 'btn-default',
    label: '默认'
}, {
        value: 'btn-primary',
        label: '首选'
    }, {
        value: 'btn-success',
        label: '成功'
    }, {
        value: 'btn-info',
        label: '一般信息'
    }, {
        value: 'btn-danger',
        label: '危险操作'
    }, {
        value: 'btn-link',
        label: '链接'
    }]

class SetButton extends Component {

    handleChangeButton(key, index, val) {
        let {update, data} = this.props;
        let item = data[index];
        let {eventKey} = item;
        let newData = [
            ...data.slice(0, index),
            Object.assign({}, item, {
                [key]: val
            }),
            ...data.slice(index + 1)
        ];
        update(newData, key === 'text' ? {
            regtype: 2,
            label: val,
            value: eventKey
        } : null);
    }

    renderList() {
        let {data = []} = this.props;
        return data.map((item, index) => {
            return <div className='row' key={index}>
                <div className='col-md-6'>
                    <Input placeholder='按钮文字' onChange={this.handleChangeButton.bind(this, 'text', index) } value={item.text} />
                </div>
                <div className='col-md-6'>
                    <Select onChange={this.handleChangeButton.bind(this, 'type', index) } options={buttonTypes} value={item.type}/>
                </div>
            </div>
        })
    }

    handleAddButton() {
        let {update, data} = this.props;
        let eventKey = Date.now();
        let text = '按钮' + (data.length + 1);
        //  regtype 1-add, 2-update 3-delete
        update([...data, {
            text,
            type: 'btn-default',
            eventKey
        }], {
                label: text,
                value: eventKey,
                regtype: 1
            })
    }


    render() {

        return <div className='props-set-button container-fluid'>
            {this.renderList() }
            <div>
                <a href="javascript:;" className='fa fa-plus' onClick={this.handleAddButton.bind(this) }>添加按钮</a>
            </div>
        </div>
    }

}

export default SetButton;