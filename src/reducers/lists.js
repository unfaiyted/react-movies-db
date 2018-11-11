import { ADD_LIST, RECEIVE_LISTS, REMOVE_LIST } from "../actions/lists";

export default function lists(state = {}, action) {
  switch(action.type) {
    case ADD_LIST:
      return state.concat([action.list]);
    case REMOVE_LIST:
      return state.filter((list) => list.id !== action.id);
    case RECEIVE_LISTS:
      return {
        ...state,
        ...action.lists
      };
    default:
      return state;
  }
}
