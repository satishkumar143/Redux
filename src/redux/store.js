import Reducer from './Reducer';
import ReducerC from './ReducerC';
import { createStore,combineReducers } from 'redux';

const up=combineReducers({c:Reducer,d:ReducerC})
const lovestore = new createStore(up);

export default lovestore;
