import { 
    FETCH_EPISODE_DETAILS_START,
    FETCH_EPISODE_DETAILS_SUCCESS,
    FETCH_EPISODE_DETAILS_FAIL,
    EpisodeDetailsActionTypes
 } from './types';
 import { Episode } from 'shared/types/interfaces/episode';

export function fetchEpisodeDetailsStart(episodeId: string): EpisodeDetailsActionTypes {
    return {
        type: FETCH_EPISODE_DETAILS_START,
        payload: episodeId
    }
}

export function fetchEpisodeDetailsSuccess(episode: Episode): EpisodeDetailsActionTypes {
    return {
        type: FETCH_EPISODE_DETAILS_SUCCESS,
        payload: episode
    }
}

export function fetchEpisodeDetailsFail(error: Error): EpisodeDetailsActionTypes {
    return {
        type: FETCH_EPISODE_DETAILS_FAIL,
        payload: error
    }
}