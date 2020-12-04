import { combineReducers } from 'redux';

import { showDetailsReducer } from './show-details/reducer';
import { episodesReducer } from './episodes/reducer';

export const selectedShowReducer = combineReducers({
    show: showDetailsReducer,
    episodes: episodesReducer
});