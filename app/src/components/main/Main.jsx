import React, { Component } from 'react'
import Navbar from '../navbar/Navbar';
import Signin from '../signin/Signin';

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Signin />
            </div>
        )
    }
}

export default Main; 