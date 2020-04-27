import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthRoute extends Component {
    constructor(props) {
        super(props)
        console.log('consturctor called....')
    }


    render() {

        console.log('isAuthUser', this.props.isAuthUser)
        return (
            <div>
                {this.props.isAuthUser ? < Route {...this.props} /> : <Redirect to='/login' />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthUser: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(AuthRoute);