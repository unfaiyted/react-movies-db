export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LISTS = 'RECEIVE_LISTS';


export function addList(list) {
  return {
    type: ADD_LIST,
    list
  }
}

function removeList(id) {
  return {
    type: REMOVE_LIST,
    id
  }
}


export function receiveLists(lists) {
  return {
    type: RECEIVE_LISTS,
    lists
  }
}
