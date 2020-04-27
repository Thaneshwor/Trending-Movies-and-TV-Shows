import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/authAction';
import { history } from '../../store/history';
import './signin.css';
import { isValidEmail, validatePassword } from '../../helpers/validations';

class Signin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            showErrorMsg: false,
        }
    }

    componentDidUpdate = () => {
        const { isAuthenticated } = this.props;

        if (isAuthenticated) {
            history.push('/home');
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email)
        if (isValidEmail(this.state.email) && validatePassword(this.state.password)) {
            this.props.login(this.state);
        } else {
            this.setState({
                ...this.state,
                showErrorMsg: true
            })
        }

    }

    render() {
        return (
            <div>
                <div className='form-container-out'>
                    <div className='form-container-in'>
                        <form onSubmit={this.handleSubmit}>
                            <label>Email</label>
                            <input type='email' placeholder='Email' name='email' onChange={this.onChange} />
                            <label>Password</label>
                            <input type='password' placeholder='Password' name='password' onChange={this.onChange} />
                            <button type='submit' className='btn-submit'>Login</button>
                        </form>
                        {this.state.showErrorMsg && <div> Login Error </div>}
                    </div >
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { login })(Signin);
