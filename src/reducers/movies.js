import { ADD_MOVIE, REMOVE_MOVIE, RECEIVE_MOVIES} from "../actions/movies";

export default function movies(state = {}, action) {
  switch(action.type) {
    case ADD_MOVIE:
      return state.concat([action.movie]);
    case REMOVE_MOVIE:
      return state.filter((movie) => movie.id !== action.id);
    case RECEIVE_MOVIES:
      return {
        ...state,
        ...action.movies
      };
    default:
      return state;
  }
}
