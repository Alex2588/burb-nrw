import { Show } from 'shared/types/interfaces/show';
import { NormalizedData } from 'utils/normalizeData';

export const FETCH_SHOWS_LIST_START = 'FETCH_SHOWS_LIST_START';
export const FETCH_SHOWS_LIST_SUCCESS = 'FETCH_SHOWS_LIST_SUCCESS';
export const FETCH_SHOWS_LIST_FAIL = 'FETCH_SHOWS_LIST_FAIL';

export interface ShowsState {
    shows: NormalizedData<Show>,
    error: Error | null,
    isLoading: boolean
}

interface FetchShowsListStartAction {
    type: typeof FETCH_SHOWS_LIST_START
}

interface FetchShowsListSuccessAction {
    type: typeof FETCH_SHOWS_LIST_SUCCESS,
    payload: Show[]
}

interface FetchShowsListFailAction {
    type: typeof FETCH_SHOWS_LIST_FAIL,
    payload: Error
}


export type ShowsActionTypes = 
    FetchShowsListStartAction |
    FetchShowsListSuccessAction |
    FetchShowsListFailAction