import {ADD_SEARCH, RECEIVE_SEARCH, REMOVE_SEARCH} from "../actions/search";

export default function search(state = {}, action) {
  switch(action.type) {
    case ADD_SEARCH:
      return state.concat([action.search]);
    case REMOVE_SEARCH:
      return state.filter((search) => search.id !== action.id);
    case RECEIVE_SEARCH:
      return {
        ...state,
        ...action.search
      };
    default:
      return state;
  }
}
