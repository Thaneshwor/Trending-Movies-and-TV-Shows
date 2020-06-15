import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register, loading } from "../../actions/authAction";
import { history } from "../../store/history";
import {
  isValidEmail,
  validatePassword,
  isEmpty
} from "../../helpers/validations";
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      showErrorMsg: false
    };
  }

  componentDidUpdate = () => {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      history.push("/home");
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, showErrorMsg: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loading();

    if (
      validatePassword(this.state.password) &&
      isValidEmail(this.state.email) &&
      !isEmpty(this.state.firstName) &&
      !isEmpty(this.state.lastName)
    ) {
      this.props.register(this.state);
    } else {
      this.setState({
        ...this.state,
        showErrorMsg: true
      });
    }
  };

  render() {
    return (
      <div className="form-container-out">
        <div className="form-container-in">
          <form onSubmit={this.handleSubmit}>
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.onChange}
            />
            <label>First Name</label>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              onChange={this.onChange}
            />
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              onChange={this.onChange}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.onChange}
            />
            <button type="submit" className="btn-submit">
              Create Account
            </button>
          </form>
        </div>
        {this.state.showErrorMsg && (
          <div className="err-msg">Please provide valid inputs</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { register, loading })(Signup);
