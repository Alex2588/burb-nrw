import {
    FETCH_SHOW_DETAILS_START,
    FETCH_SHOW_DETAILS_SUCCESS,
    FETCH_SHOW_DETAILS_FAIL,
    ShowDetailsState,
    ShowDetailsActionTypes
} from './types';

const initialState: ShowDetailsState = {
    details: null,
    error: null,
    isLoading: false
}

export function showDetailsReducer(state = initialState, action: ShowDetailsActionTypes): ShowDetailsState {
    switch (action.type) {
        case FETCH_SHOW_DETAILS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_SHOW_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                details: action.payload
            }
        case FETCH_SHOW_DETAILS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}