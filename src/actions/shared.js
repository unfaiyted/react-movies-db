import {getInitialData} from "../util/api";
import {receiveMovies} from "./movies";
import {receiveTvShows} from "./tvshows";
import {showLoading, hideLoading} from 'react-redux-loading';

//
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({latestMovies, upcomingMovies, popularMovies}) => {
      dispatch(receiveMovies(latestMovies));
      dispatch(receiveMovies(upcomingMovies));
      dispatch(receiveMovies(popularMovies));
      dispatch(hideLoading())
    })
  }
}
