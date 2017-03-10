import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import {Example} from './app';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('playground')
  );
};

render(Example);


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(Example)
  });
}
