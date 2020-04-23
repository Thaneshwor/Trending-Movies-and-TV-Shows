import React, { Component } from 'react'
import './signin.css';

class Signin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            showErrorMsg: false,
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
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

export default Signin;
