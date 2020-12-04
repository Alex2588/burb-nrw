import { all, call } from 'redux-saga/effects';

import { showsSagas } from './shows/sagas';
import { selectedShowSaga } from './selected-show/selected-show-saga';
import { selectedEpisodeSagas } from './selected-episode/sagas';

export default function* rootSaga() {
    yield all([ 
        call(showsSagas),
        call(selectedShowSaga),
        call(selectedEpisodeSagas)
    ]);
}