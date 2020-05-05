import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import bugAdded from './actions'


store.dispatch(bugAdded("Bug 1"))
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
