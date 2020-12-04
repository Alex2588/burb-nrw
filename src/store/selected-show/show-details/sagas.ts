import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

import urls from 'api/urls.json';
import { fetchShowDetailsSuccess, fetchShowDetailsFail } from './actions';
import { FETCH_SHOW_DETAILS_START } from './types';

function* fetchShowDetailsStart() {
    yield takeLatest(
        FETCH_SHOW_DETAILS_START,
        yield fetchShowDetailsAsync
    )
}

function* fetchShowDetailsAsync({ payload: showId }: { payload: { showId: string } }) {
    try {
        const response = yield axios.get(`${urls.BASE_URL}shows/${showId}`);
        yield put(fetchShowDetailsSuccess(response.data));
    } catch (error) {
        yield put(fetchShowDetailsFail(error));
    }
}

export function* showDetailsSagas() {
    yield all([call(fetchShowDetailsStart)]);
}