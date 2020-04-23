import React, { Component } from 'react';

class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            showErrorMsg: true,
        }

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        console.log('handle submit...');
    }

    render() {
        return (
            <div className='form-container-out'>
                <div className='form-container-in'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email</label>
                        <input type='text' placeholder='Email' name='email' onChange={this.onChange} />
                        <label>First Name</label>
                        <input type='text' placeholder='First name' name='firstName' onChange={this.onChange} />
                        <label>Last Name</label>
                        <input type='text' placeholder='Last name' name='lastName' onChange={this.onChange} />
                        <label>Password</label>
                        <input type='password' placeholder='Password' name='password' onChange={this.onChange} />
                        <button type='submit' className='btn-submit'>Create Account</button>
                    </form>
                </div >
                {this.state.showErrorMsg && <div className='err-msg'>Please provide valid inputs</div>}
            </div>
        )
    }
}

export default Signup;
