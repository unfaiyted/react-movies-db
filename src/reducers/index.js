import { combineReducers } from 'redux'

import lists from './lists';
import movies from './movies';
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
  movies,
  lists,
  loadingBar: loadingBarReducer
})
