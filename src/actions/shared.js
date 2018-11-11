import {getInitialData} from "../util/api";
import {receiveMovies} from "./movies";
import {receiveTvShows} from "./tvshows";
import {showLoading, hideLoading} from 'react-redux-loading';
import {receiveLists} from "./lists";

// Handle gathering initial data
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({topRatedMovies, upcomingMovies, popularMovies}) => {

      const movies =
          topRatedMovies.results
          .concat(upcomingMovies.results)
          .concat(popularMovies.results);

      const lists = [
        {
          id: 'topRatedMovies',
          name: 'Top Rated Movies',
          mediaIds: getIdsFromResults(topRatedMovies.results)
        },
        {
          id: 'upcomingMovies',
          name: 'Upcoming Movies',
          mediaIds: getIdsFromResults(upcomingMovies.results)
        },
        {
          id: 'popularMovies',
          name: 'Popular Movies',
          mediaIds: getIdsFromResults(popularMovies.results)
        },
      ];

      dispatch(receiveMovies(movies));
      dispatch(receiveLists(lists));
      dispatch(hideLoading())
    })
  }
}


function getIdsFromResults(results) {
  return results
    .map((data) => {
      return data.id;
    });
}
