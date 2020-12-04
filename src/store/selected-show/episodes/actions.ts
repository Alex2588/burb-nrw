import {
    FETCH_EPISODES_LIST_START,
    FETCH_EPISODES_LIST_SUCCESS,
    FETCH_EPISODES_LIST_FAIL,
    EpisodesActionTypes
} from './types';
import { Episode } from 'shared/types/interfaces/episode';

export function fetchEpisodesListStart(showId: string): EpisodesActionTypes {
    return {
        type: FETCH_EPISODES_LIST_START,
        payload: showId
    }
}

export function fetchEpisodesListSuccess(episodes: Episode[]): EpisodesActionTypes {
    return {
        type: FETCH_EPISODES_LIST_SUCCESS,
        payload: episodes
    }
}

export function fetchEpisodesListFail(error: Error): EpisodesActionTypes {
    return {
        type: FETCH_EPISODES_LIST_FAIL,
        payload: error
    }
}