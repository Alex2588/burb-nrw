import { 
    FETCH_SHOWS_LIST_START,
    FETCH_SHOWS_LIST_SUCCESS,
    FETCH_SHOWS_LIST_FAIL,
    ShowsActionTypes
} from './types';
import { Show } from 'shared/types/interfaces/show';

export function fetchShowsListStart(): ShowsActionTypes {
    return {
        type: FETCH_SHOWS_LIST_START
    }
}

export function fetchShowsListSuccess(shows: Show[]): ShowsActionTypes {
    return {
        type: FETCH_SHOWS_LIST_SUCCESS,
        payload: shows
    }
}

export function fetchShowsListFail(error: Error): ShowsActionTypes {
    return {
        type: FETCH_SHOWS_LIST_FAIL,
        payload: error
    }
}