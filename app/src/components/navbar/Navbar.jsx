import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import { getFevMovSers } from '../../actions/favAction';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    userLogout = () => {
        this.props.logout();
    }

    displayFavMovSer = () => {
        this.props.getFevMovSers();
    }

    render() {
        const authLink = (
            <Fragment>
                <li><Link to='/login'>Sign In</Link></li>
                <li><Link to='/sign-up'>Sign Up</Link></li>
            </Fragment>
        );

        const guestLink = (
            <Fragment>
                <li><Link to='/login' onMouseDown={this.userLogout}>Log Out</Link></li>
                <li><Link to='/favourites' onMouseDown={this.getFevMovSers}>Favorite</Link></li>
            </Fragment>
        );

        return (
            <div className='nav-bar-container'>
                <div className='nav-bar container-max-width'>
                    <div className='nav-bar-in'>
                        <div className='nav-bar-left'>
                            <h1>IMDB</h1>
                        </div>
                        <div className='nav-bar-right'>
                            <ul>
                                {this.props.isAuthenticated ? guestLink : authLink}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { logout, getFevMovSers })(Navbar);
