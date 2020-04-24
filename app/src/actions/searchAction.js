import axios from 'axios';
import { FETCH_MOVIES, FETCH_SERIES } from '../store/mutations';

export const fetchMovies = () => dispatch => {

    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7f2f9921b7434913f82ee5e53e3d3e16&language=en-US&page=1')
        .then(res => dispatch({
            type: FETCH_MOVIES,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const fetchTvSeries = () => dispatch => {
    console.log('fetching tv series')
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=7f2f9921b7434913f82ee5e53e3d3e16&language=en-US&page=1')
        .then(res => {
            dispatch(
                {
                    type: FETCH_SERIES,
                    payload: res.data
                })
        })
        .catch(err => console.log(err))
}
