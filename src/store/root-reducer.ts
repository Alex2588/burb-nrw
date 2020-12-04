import { combineReducers } from 'redux';

import { showsReducer } from './shows/reducer';
import { selectedShowReducer } from './selected-show/selected-show-reducer'; 
import { selectedEpisodeReducer } from './selected-episode/reducer';

export const rootReducer = combineReducers({
    shows: showsReducer,
    selectedShow: selectedShowReducer,
    selectedEpisode: selectedEpisodeReducer
});

export type AppState = ReturnType<typeof rootReducer>;