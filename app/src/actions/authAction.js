import * as mutations from '../store/mutations';
import axios from 'axios';

// Register User
export const register = ({ email, firstName, lastName, password }) => dispatch => {
    console.log(email, firstName, lastName, password)
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({ email, firstName, lastName, password })

    axios.post('http://localhost:8080/api/auth/sign-up', body, config)
        .then(res => dispatch({
            type: mutations.REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: mutations.REGISTER_FAIL
            });
        });

}


// Login user
export const login = ({ email, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    console.log(email, password)
    // Request body
    const body = JSON.stringify({ email, password })

    axios.post('http://localhost:8080/api/auth/login', body, config)
        .then(res => dispatch({
            type: mutations.LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            console.log(err)
            dispatch({
                type: mutations.LOGIN_FAIL
            });
        });
}

// User Logout
export const logout = () => dispatch => {
    dispatch({
        type: mutations.LOGOUT_SUCCESS
    })
}

// Set Loading as true
export const loading = () => dispatch => (
    dispatch({
        type: mutations.LOADING
    })
)