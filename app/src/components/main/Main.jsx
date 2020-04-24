import React, { Component, Fragment } from 'react'
import Navbar from '../navbar/Navbar';
import Signin from '../signin/Signin';
import Signup from '../signup/Signup';
import Card from '../card/Card';
import Home from '../home/Home';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                {/* <Signin /> */}
                {/* <Signup /> */}
                {/* <Card /> */}
                <Home />
            </Fragment>
        )
    }
}

export default Main; 