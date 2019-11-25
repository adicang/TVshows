import { combineReducers } from 'redux';
import currShow from './currentShowReducer';
import fetchApiState from './fetchApiReducer';
import favorites from './favoritesReducer';

const allReducers = combineReducers({
    currShow: currShow,
    fetchApiState: fetchApiState,
    favorites: favorites
})

export default allReducers;
