import {AppState} from '..';

export const getNewsIds = (state: AppState) => state.news.ids;
export const getNewsItems = (state: AppState) => state.news.newsItems;
export const getIsLoading = (state: AppState) => state.news.loading;
export const getAuthors = (state: AppState) => state.news.authors;
