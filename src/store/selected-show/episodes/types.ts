import { NormalizedData } from 'utils/normalizeData';
import { Episode } from 'shared/types/interfaces/episode';

export const FETCH_EPISODES_LIST_START = 'FETCH_EPISODES_LIST_START';
export const FETCH_EPISODES_LIST_SUCCESS = 'FETCH_EPISODES_LIST_SUCCESS';
export const FETCH_EPISODES_LIST_FAIL = 'FETCH_EPISODES_LIST_FAIL';

export interface EpisodesState {
    episodesList: NormalizedData<Episode>,
    error: Error | null
}

interface FetchEpisodesListStartAction {
    type: typeof FETCH_EPISODES_LIST_START,
    payload: string
}

interface FetchEpisodesListSuccessAction {
    type: typeof FETCH_EPISODES_LIST_SUCCESS,
    payload: Episode[]
}

interface FetchEpisodesListFailAction {
    type: typeof FETCH_EPISODES_LIST_FAIL,
    payload: Error
}


export type EpisodesActionTypes =
    FetchEpisodesListStartAction |
    FetchEpisodesListSuccessAction |
    FetchEpisodesListFailAction