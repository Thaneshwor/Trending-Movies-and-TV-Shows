import {
  FETCH_MOVIES,
  FETCH_SERIES,
  MOVIES_LOADING,
  SERIES_LOADING
} from "../store/mutations";

const initialState = {
  movies: [],
  series: [],
  movies_loading: true,
  series_loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        ...state.movies,
        movies_loading: false
      };

    case FETCH_SERIES:
      return {
        ...state,
        series: action.payload.results,
        ...state.series,
        series_loading: false
      };

    case MOVIES_LOADING:
      return {
        ...state,
        movies_loading: true
      };

    case SERIES_LOADING:
      return {
        ...state,
        series_loading: true
      };

    default:
      return state;
  }
}
