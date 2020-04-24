import { combineReducers } from 'redux';
import favReducer from './favReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    fav: favReducer,
    auth: authReducer,
    search: searchReducer,
})
