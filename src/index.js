import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

import * as serviceWorker from './serviceWorker';

import reducers from './reducers/index';
import middleware from './middleware/index';

import Test from "./components/Test/Test";
import App from './components/App';
import {getURLParameter} from "./util/helpers";


const store = createStore(reducers, middleware);


const isTest = getURLParameter('test');

ReactDOM.render(
  <Provider store={store}>
    {(isTest !== "true") ?
      <App /> :
      <Test />
    }
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
