import { Show } from 'shared/types/interfaces/show';

export const FETCH_SHOW_DETAILS_START = 'FETCH_SHOW_DETAILS_START';
export const FETCH_SHOW_DETAILS_SUCCESS = 'FETCH_SHOW_DETAILS_SUCCESS';
export const FETCH_SHOW_DETAILS_FAIL = 'FETCH_SHOW_DETAILS_FAIL';

export interface ShowDetailsState {
    details: Show | null,
    error: Error | null,
    isLoading: boolean
}

interface FetchShowDetailsStartAction {
    type: typeof FETCH_SHOW_DETAILS_START,
    payload: string
}

interface FetchShowDetailsSuccessAction {
    type: typeof FETCH_SHOW_DETAILS_SUCCESS,
    payload: Show
}

interface FetchShowDetailsFailAction {
    type: typeof FETCH_SHOW_DETAILS_FAIL,
    payload: Error
}

export type ShowDetailsActionTypes = 
    FetchShowDetailsStartAction |
    FetchShowDetailsSuccessAction |
    FetchShowDetailsFailAction