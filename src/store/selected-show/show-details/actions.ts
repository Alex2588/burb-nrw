import { 
    FETCH_SHOW_DETAILS_START,
    FETCH_SHOW_DETAILS_SUCCESS,
    FETCH_SHOW_DETAILS_FAIL,
    ShowDetailsActionTypes
 } from './types';
 import { Show } from 'shared/types/interfaces/show';

export function fetchShowDetailsStart(showId: string): ShowDetailsActionTypes {
    return {
        type: FETCH_SHOW_DETAILS_START,
        payload: showId
    }
}

export function fetchShowDetailsSuccess(show: Show): ShowDetailsActionTypes {
    return {
        type: FETCH_SHOW_DETAILS_SUCCESS,
        payload: show
    }
}

export function fetchShowDetailsFail(error: Error): ShowDetailsActionTypes {
    return {
        type: FETCH_SHOW_DETAILS_FAIL,
        payload: error
    }
}