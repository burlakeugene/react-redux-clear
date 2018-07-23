import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	routing: routerReducer,
	userReducer
});