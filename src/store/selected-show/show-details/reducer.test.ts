import { mock } from 'jest-mock-extended';

import { showDetailsReducer } from './reducer';
import { 
    FETCH_SHOW_DETAILS_START, 
    FETCH_SHOW_DETAILS_SUCCESS, 
    FETCH_SHOW_DETAILS_FAIL, 
    ShowDetailsState 
} from './types';
import { Show } from 'shared/types/interfaces/show';

describe('showDetails reducer', () => {
    const initialState: ShowDetailsState = {
        details: null,
        error: null,
        isLoading: false
    }
    const show = mock<Show>();
    const error = new Error();

    it('should handle FETCH_SHOW_DETAILS_START', () => {
        expect(showDetailsReducer(initialState, { type: FETCH_SHOW_DETAILS_START, payload: '1' }))
            .toEqual({ details: null, error: null, isLoading: true })
    });

    it('should handle FETCH_SHOW_DETAILS_SUCCESS', () => {
        expect(showDetailsReducer(initialState, { type: FETCH_SHOW_DETAILS_SUCCESS, payload: show }))
            .toEqual({ 
                details: show, 
                error: null, 
                isLoading: false 
            });
    });

    it('should handle FETCH_SHOW_DETAILS_FAIL', () => {
        expect(showDetailsReducer(initialState, { type: FETCH_SHOW_DETAILS_FAIL, payload: error }))
            .toEqual({ details: null, error: error, isLoading: false })
    });
})