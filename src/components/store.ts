import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from '../reducers/';
import { createLogger } from 'redux-logger';

const reducer = combineReducers(reducers);
const logger = createLogger({});

let middlewares = [];


process.env.NODE_ENV !== 'production' && middlewares.push(logger);

const store = createStore(
	reducer,
	applyMiddleware(...middlewares)
);

export default store;
