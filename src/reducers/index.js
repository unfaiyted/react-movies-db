import { combineReducers } from 'redux'

import movies from './movies';
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
  movies,
  loadingBar: loadingBarReducer
})
