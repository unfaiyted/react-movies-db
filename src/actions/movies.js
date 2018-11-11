
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

export function recieveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    movies
  }
}

export function handleMovieData() {

}

export function handleAddMovie() {

}
