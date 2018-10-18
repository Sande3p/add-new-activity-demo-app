import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { ActivityList } from './containers';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <ActivityList />
  </Provider>,
  document.getElementById('app')
);

