import { 
    FETCH_SHOWS_LIST_START,
    FETCH_SHOWS_LIST_SUCCESS,
    FETCH_SHOWS_LIST_FAIL,
    ShowsState,
    ShowsActionTypes
} from './types';
import { normalizeData } from 'utils/normalizeData';
import { Show } from 'shared/types/interfaces/show';

const initialState: ShowsState = {
    shows: { byId: {}, allIds: []},
    error: null,
    isLoading: false
}

export function showsReducer(state = initialState, action: ShowsActionTypes): ShowsState {
    switch (action.type) {
        case FETCH_SHOWS_LIST_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_SHOWS_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                shows: normalizeData<Show>(action.payload)
            }
        case FETCH_SHOWS_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}