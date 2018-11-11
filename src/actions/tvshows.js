
export const ADD_TV = 'ADD_TV';
export const REMOVE_TV = 'REMOVE_TV';
export const RECEIVE_TVS = 'RECEIVE_TVS';

function addTvShows(movie) {
  return {
    type: ADD_TV,
    movie
  }
}

function removeTvShows(id) {
  return {
    type: REMOVE_TV,
    id
  }
}

export function receiveTvShows(movies) {
  return {
    type: RECEIVE_TVS,
    movies
  }
}

export function handleTvShowData() {

}

export function handleAddTvShow() {

}
