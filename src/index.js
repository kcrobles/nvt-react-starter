import 'core-js/stable';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const init = async () => {
  try {
    const movies = await axios.get('http://localhost:8080/movies');
    const jsx = <App movies={movies.data} />;
    ReactDOM.render(jsx, document.querySelector('#app'));
  } catch (e) {
    ReactDOM.render(<h2>Nothing to show...</h2>, document.querySelector('#app'));
  }
};

init();
