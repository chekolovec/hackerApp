import {call, put} from 'redux-saga/effects';
import {ReduxAction} from '..';

import {API} from '../api';
import {FETCH_AUTHORS, FETCH_NEWS, FETCH_NEWS_BY_ID} from './actions';
import {IAuthor, INewsItem} from './reducer';

type INewsIds = string[];

export function* fetchNewsIdsSaga() {
  try {
    const newsIds: INewsIds = yield call(API.fetchNewsIds);
    yield put({type: FETCH_NEWS.SUCCESS, payload: newsIds});
  } catch (e) {
    yield put({type: FETCH_NEWS.FAIL, message: e.message});
  }
}

export function* fetchNewsByIdSaga(action: ReduxAction<string[]>) {
  try {
    const promiseArray =
      action?.payload?.map((id: string) => {
        return API.fetchNewsItem(id);
      }) || [];

    const newsItems: INewsItem[] = yield Promise.all(promiseArray);

    newsItems.sort((firstItem, nextItem) => {
      if (!firstItem.score) {
        return 1;
      }
      if (!nextItem.score) {
        return -1;
      }
      return firstItem.score - nextItem.score;
    });

    yield put({type: FETCH_NEWS_BY_ID.SUCCESS, payload: newsItems});
  } catch (e) {
    yield put({type: FETCH_NEWS_BY_ID.FAIL, message: e.message});
  }
}

export function* fetchAuthorsSaga(action: ReduxAction) {
  try {
    const promiseArray =
      action?.payload?.map((id: string) => {
        return API.fetchAuthor(id);
      }) || [];

    const authorsArray: IAuthor[] = yield Promise.all(promiseArray);
    yield put({type: FETCH_AUTHORS.SUCCESS, payload: authorsArray});
  } catch (e) {
    yield put({type: FETCH_AUTHORS.FAIL, message: e.message});
  }
}
