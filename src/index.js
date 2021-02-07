import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore} from "redux";
import { Provider } from 'react-redux';
import postsReducer from './redux/reducers'

const store = createStore(postsReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
