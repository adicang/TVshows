import { combineReducers } from 'redux';
import currShow from './currentShowReducer';
import fetchApiState from './fetchApiReducer';

const allReducers = combineReducers({
    currShow: currShow,
    fetchApiState: fetchApiState
})

export default allReducers;
