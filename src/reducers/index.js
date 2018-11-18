import { combineReducers } from 'redux'

import lists from './lists';
import movies from './movies';
import search from './search';

import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
  movies,
  lists,
  search,
  loadingBar: loadingBarReducer
})
