import { FETCH_MOVIES, FETCH_SERIES } from '../store/mutations';

const initialState = {
    movies: [],
    series: [],
}

export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_MOVIES:
            return ({
                ...state,
                text: action.payload,
                loading: false,
            });

        case FETCH_SERIES:
            return ({
                ...state,
                text: action.payload,
                loading: false,
            });

        default:
            return state;
    }
}