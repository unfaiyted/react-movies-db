import  { search as getSearch } from "../util/api";
import {RECEIVE_LISTS} from "./lists";

export const ADD_SEARCH = 'ADD_SEARCH';
export const REMOVE_SEARCH = 'REMOVE_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export function addSearch(search) {
  return {
    type: ADD_SEARCH,
    search
  }
}

function removeSearch(id) {
  return {
    type: REMOVE_SEARCH,
    id
  }
}

export function receiveSearch(search) {
  return {
    type: RECEIVE_SEARCH,
    search
  }
}

export function handleMovieSearch(query, cb) {
  return (dispatch) => {
    return getSearch(query).then((res) => {
      dispatch(receiveSearch(res));
      cb();
    }).catch(() => console.error('Error performing search function'))
  }
}


