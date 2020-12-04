import { all, call } from 'redux-saga/effects';

import { showDetailsSagas } from './show-details/sagas';
import { episodesSagasSagas } from './episodes/sagas';

export function* selectedShowSaga() {
    yield all([
        call(showDetailsSagas),
        call(episodesSagasSagas)
    ]);
}