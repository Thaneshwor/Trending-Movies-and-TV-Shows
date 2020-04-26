import axios from 'axios';
import { FETCH_FEV_MOVSER, SET_FEV_MOVSER, DELETE_FAV_MOVSER } from '../store/mutations';

export const getFevMovSers = () => (dispatch) => {

    axios.
        get('http://localhost:8080/api/favorites', {
            headers: {
                'token': `${localStorage.getItem('token')}`
            }
        }).
        then(res => {
            dispatch({
                type: FETCH_FEV_MOVSER,
                payload: res.data,
            })
        })
};

export const setFevMovSers = movser => dispatch => {
    console.log('setting fav movies............')
    console.log(localStorage('token'));
    axios.post('http://localhost:8080/api/favorites', movser, {
        headers: {
            'token': `${localStorage('token')}`
        }
    }).
        then(res => {
            dispatch({
                type: SET_FEV_MOVSER,
                payload: res.data,
            })
        }).
        catch(err => {
            console.log(err);
        })
};

export const delFevMovSer = id => dispatch => {
    axios.delete(`http://localhost:8080/api/favorites/${id}`, {
        headers: {
            'token': `${localStorage.getItem('token')}`
        }
    }).
        then(res => {
            dispatch({
                type: DELETE_FAV_MOVSER,
                payload: id,
            })
        })
};
