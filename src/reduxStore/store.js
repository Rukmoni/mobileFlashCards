import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import decksReducer from './decksSlice';

const reducer = combineReducers({
	decks: decksReducer,
});
const store = configureStore({ reducer, middleware: [thunk, logger] });

export default store;
