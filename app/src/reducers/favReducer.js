import { FETCH_FEV_MOVSER, SET_FEV_MOVSER, DELETE_FAV_MOVSER } from '../store/mutations';

const initialState = {
	movieSers: [],
	loading: false,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_FEV_MOVSER:
			return {
				...state,
				favMoviesSeries: action.payload,
				loading: false
			};
		case SET_FEV_MOVSER:
			return {
				...state,
				favMoviesSeries: [action.payload.data, ...state.movieSers],
			};
		case DELETE_FAV_MOVSER:
			return {
				...state,
				movieSers: state.movieSers.filter(movser => movser.id !== action.payload)
			};
		default:
			return state;
	}
}