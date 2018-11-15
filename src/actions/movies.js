import  {getMovie} from "../util/api";

export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie
  }
}

function removeMovie(id) {
  return {
    type: REMOVE_MOVIE,
    id
  }
}

export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    movies
  }
}

export function handleAddMovie(id, cb) {
  return (dispatch) => {
    return getMovie(id).then((res) => {
      dispatch(addMovie(res));
      cb();
    }).catch(() => console.error("Error adding movie"))
  }
}
