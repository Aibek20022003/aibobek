import { createStore } from 'redux';
import todoReducer from '../reducer/store';

const store = createStore(todoReducer);

export default store;
