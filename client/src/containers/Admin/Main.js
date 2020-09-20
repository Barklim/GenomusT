import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Main extends Component {

    render() {
        return (
            <div className="rl_container">
                Главная
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Main)

