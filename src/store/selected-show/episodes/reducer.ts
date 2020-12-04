import {
    FETCH_EPISODES_LIST_START,
    FETCH_EPISODES_LIST_SUCCESS,
    FETCH_EPISODES_LIST_FAIL,
    EpisodesActionTypes,
    EpisodesState
} from './types';
import { normalizeData } from 'utils/normalizeData';
import { Episode } from 'shared/types/interfaces/episode';

const initialState: EpisodesState = {
    episodesList: { byId: {}, allIds: [] },
    error: null
}

export function episodesReducer(state = initialState, action: EpisodesActionTypes): EpisodesState {
    switch (action.type) {
        case FETCH_EPISODES_LIST_START:
            return {
                ...state,
                error: null
            }
        case FETCH_EPISODES_LIST_SUCCESS:
            return {
                ...state,
                error: null,
                episodesList: normalizeData<Episode>(action.payload)
            }
        case FETCH_EPISODES_LIST_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}