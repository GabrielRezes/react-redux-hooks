import { createStore } from 'redux';

import combineReducers from './combineReducer/';

const store = createStore(combineReducers);

export default store;