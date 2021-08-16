import {takeEvery, takeLatest} from 'redux-saga/effects';

import {FETCH_AUTHORS, FETCH_NEWS, FETCH_NEWS_BY_ID} from './news/actions';
import {
  fetchAuthorsSaga,
  fetchNewsByIdSaga,
  fetchNewsIdsSaga,
} from './news/sagas';

export default function* rootSaga() {
  yield takeLatest(FETCH_NEWS.REQUEST, fetchNewsIdsSaga);
  yield takeEvery(FETCH_NEWS_BY_ID.REQUEST, fetchNewsByIdSaga);
  yield takeEvery(FETCH_AUTHORS.REQUEST, fetchAuthorsSaga);
}
