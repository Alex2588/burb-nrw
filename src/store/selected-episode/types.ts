import { Episode } from 'shared/types/interfaces/episode';

export const FETCH_EPISODE_DETAILS_START = 'FETCH_EPISODE_DETAILS_START';
export const FETCH_EPISODE_DETAILS_SUCCESS = 'FETCH_EPISODE_DETAILS_SUCCESS';
export const FETCH_EPISODE_DETAILS_FAIL = 'FETCH_EPISODE_DETAILS_FAIL';

export interface EpisodeDetailsState {
    episodeDetails: Episode | null,
    error: Error | null,
    isLoading: boolean
}

interface FetchEpisodeDetailsStartAction {
    type: typeof FETCH_EPISODE_DETAILS_START,
    payload: string
}

interface FetchEpisodeDetailsSuccessAction {
    type: typeof FETCH_EPISODE_DETAILS_SUCCESS,
    payload: Episode
}

interface FetchEpisodeDetailsFailAction {
    type: typeof FETCH_EPISODE_DETAILS_FAIL,
    payload: Error
}

export type EpisodeDetailsActionTypes = 
    FetchEpisodeDetailsStartAction |
    FetchEpisodeDetailsSuccessAction |
    FetchEpisodeDetailsFailAction