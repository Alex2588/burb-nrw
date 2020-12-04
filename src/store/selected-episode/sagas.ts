import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

import urls from 'api/urls.json';
import { fetchEpisodeDetailsSuccess, fetchEpisodeDetailsFail } from './actions';
import { FETCH_EPISODE_DETAILS_START } from './types';

function* fetchEpisodeDetailsStart() {
    yield takeLatest(
        FETCH_EPISODE_DETAILS_START,
        yield fetchEpisodeDetailsAsync
    )
}

function* fetchEpisodeDetailsAsync({ payload: episodeId }: { payload: { episodeId: string } }) {
    try {
        const response = yield axios.get(`${urls.BASE_URL}episodes/${episodeId}`);
        yield put(fetchEpisodeDetailsSuccess(response.data));
    } catch (error) {
        yield put(fetchEpisodeDetailsFail(error));
    }
}

export function* selectedEpisodeSagas() {
    yield all([call(fetchEpisodeDetailsStart)]);
}