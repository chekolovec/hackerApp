export const FETCH_NEWS = {
  REQUEST: 'FETCH_NEWS_REQUEST',
  SUCCESS: 'FETCH_NEWS_SUCCESS',
  FAIL: 'FETCH_NEWS_FAIL',
};

export const FETCH_NEWS_BY_ID = {
  REQUEST: 'FETCH_NEWS_BY_ID_REQUEST',
  SUCCESS: 'FETCH_NEWS_BY_ID_SUCCESS',
  FAIL: 'FETCH_NEWS_BY_ID_FAIL',
};

export const FETCH_AUTHORS = {
  REQUEST: 'FETCH_AUTHORS_REQUEST',
  SUCCESS: 'FETCH_AUTHORS_SUCCESS',
  FAIL: 'FETCH_AUTHORS_FAIL',
};

export const fetchNews = () => ({
  type: FETCH_NEWS.REQUEST,
});

export const fetchNewsById = (ids: string[]) => ({
  type: FETCH_NEWS_BY_ID.REQUEST,
  payload: ids,
});

export const fetchAuthors = (ids: string[]) => ({
  type: FETCH_AUTHORS.REQUEST,
  payload: ids,
});
