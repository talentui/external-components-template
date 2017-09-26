import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "&/reducers/home/actions";
import { bindActionCreators } from "redux";
import "./home.scss";
import { Link } from "react-router-dom";
import warning from '@beisen/talent-ui-helper/lib/utils/warning';

@connect(
    state => {
        return {
            data: state.home
        };
    },
    dispatch => {
        return bindActionCreators(actions, dispatch);
    }
)
export default class Home extends Component {
    componentDidMount() {
        this.counter = setInterval(() => {
            let { increase } = this.props;
            increase();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.counter);
    }

    render() {
        let { data, increase } = this.props;

        return (
            <div onClick={increase} className="home-page">
                <div>
                    <div> 你是否看到了时间的流失：{data} </div>
                    <Link to="/home/love">
                        爱自己，爱这个世界
                    </Link>
                </div>

            </div>
        );
    }
}
