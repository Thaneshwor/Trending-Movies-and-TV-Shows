import React, { Component, Fragment } from 'react';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.isAuthenticated = false;
    }

    render() {
        const authLink = (
            <Fragment>
                <li><a href='/signin'>Sign In</a></li>
                <li><a href='/signup'>Sign Up</a></li>
            </Fragment>
        );

        const guestLink = (
            <Fragment>
                <li><a href='/logout'>Log Out</a></li>
            </Fragment>
        );

        return (
            <div className='nav-bar-container'>
                <div className='nav-bar'>
                    <div className='nav-bar-in'>
                        <div className='nav-bar-left'>
                            <h1>IMDB</h1>
                        </div>
                        <div className='nav-bar-right'>
                            <ul>
                                {this.isAuthenticated ? guestLink : authLink}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
