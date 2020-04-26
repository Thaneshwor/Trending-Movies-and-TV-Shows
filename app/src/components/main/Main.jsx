import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Signin from '../signin/Signin';
import Signup from '../signup/Signup';
import Home from '../home/Home';
import AuthRoute from '../../routes/AuthRoute';

class Main extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/login' component={Signin}></Route>
                    <Route exact path='/signup' component={Signup}></Route>
                    <AuthRoute path='/home' component={Home} />
                </Switch>

            </Router>
        )
    }
}

export default Main;
