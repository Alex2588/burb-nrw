import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

import urls from 'api/urls.json';
import { fetchEpisodesListSuccess, fetchEpisodesListFail } from './actions';
import { FETCH_EPISODES_LIST_START } from './types';

function* fetchEpisodesListStart() {
    yield takeLatest(
        FETCH_EPISODES_LIST_START,
        yield fetchEpisodesAsync
    )
}

function* fetchEpisodesAsync({ payload: showId }: { payload: { showId: string } }) {
    try {
        const response = yield axios.get(`${urls.BASE_URL}shows/${showId}/episodes`);
        yield put(fetchEpisodesListSuccess(response.data));
    } catch (error) {
        yield put(fetchEpisodesListFail(error));
    }
}

export function* episodesSagasSagas() {
    yield all([call(fetchEpisodesListStart)]);
}