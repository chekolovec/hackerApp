import {ReduxAction} from '..';
import {FETCH_AUTHORS, FETCH_NEWS, FETCH_NEWS_BY_ID} from './actions';

export interface INewsItem {
  id: string;
  by: string;
  score: number;
}

export interface IAuthor {
  karma: number;
  id: string;
}

export interface INews {
  ids: string[];
  newsItems: INewsItem[];
  authors: {
    [key: string]: IAuthor;
  };
  loading: boolean;
}

const initialState: INews = {
  ids: [],
  newsItems: [],
  authors: {},
  loading: true,
};

export default (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case FETCH_NEWS.SUCCESS:
      return {
        ...state,
        ids: action.payload,
      };
    case FETCH_NEWS_BY_ID.SUCCESS:
      return {
        ...state,
        newsItems: action.payload,
      };
    case FETCH_AUTHORS.SUCCESS:
      const authors = action?.payload?.reduce(
        (allAuthors: {[key: string]: IAuthor}, nextAuthor: IAuthor) => {
          allAuthors[nextAuthor.id] = nextAuthor;

          return allAuthors;
        },
        {},
      );
      return {
        ...state,
        authors: {...state.authors, ...authors},
        loading: false,
      };

    default:
      return state;
  }
};
