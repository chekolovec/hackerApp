import React from 'react';
import Navigation from './src/navigation';
import {Provider as ReduxProvider} from 'react-redux';

import configureStore from './src/redux/';

export default function App() {
  const {store} = configureStore();
  return (
    <ReduxProvider store={store}>
      <Navigation />
    </ReduxProvider>
  );
}
