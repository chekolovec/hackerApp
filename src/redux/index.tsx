import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Action} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import newsReducer from './news/reducer';
import {INews} from './news/reducer';
import rootSaga from './sagas';

export interface AppState {
  news: INews;
}

export type ReduxAction<P = any> = Action<string> & {payload?: P};

export default () => {
  const rootReducer = combineReducers({
    news: newsReducer,
  });
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return {store};
};
