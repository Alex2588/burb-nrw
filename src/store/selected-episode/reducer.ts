import {
    FETCH_EPISODE_DETAILS_START,
    FETCH_EPISODE_DETAILS_SUCCESS,
    FETCH_EPISODE_DETAILS_FAIL,
    EpisodeDetailsState,
    EpisodeDetailsActionTypes
} from './types';

const initialState: EpisodeDetailsState = {
    episodeDetails: null,
    error: null,
    isLoading: false
}

export function selectedEpisodeReducer(state = initialState, action: EpisodeDetailsActionTypes): EpisodeDetailsState {
    switch (action.type) {
        case FETCH_EPISODE_DETAILS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_EPISODE_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                episodeDetails: action.payload
            }
        case FETCH_EPISODE_DETAILS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}