import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

import urls from 'api/urls.json';
import { fetchShowsListSuccess, fetchShowsListFail } from './actions';
import { FETCH_SHOWS_LIST_START } from './types';

function* fetchShowsListStart() {
    yield takeLatest(
        FETCH_SHOWS_LIST_START,
        fetchShowsAsync
    )
}

function* fetchShowsAsync() {
    try {
        const response = yield axios.get(`${urls.BASE_URL}shows`);
        yield put(fetchShowsListSuccess(response.data));
    } catch(error) {
        yield put(fetchShowsListFail(error));
    }
}

export function* showsSagas() {
    yield all([call(fetchShowsListStart)]);
}