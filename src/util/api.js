//https://www.themoviedb.org/documentation/api
import  mdb, { methods } from 'endpoints';

async function search (type = "Movie") {
  return await getData('search',type)
}

async function discover (type = "Movie") {
  return await getData('discover',type)
}

async function find (id) {
  return await getData('find', id)
}

async function movie(id, type = 'Info') {
  return await getData('movie',type, id)
}

async function tv(id, type = 'Info') {
  return await getData('tv',type, id)
}

// Pulls a List by a specific type
async function misc(type = 'LatestMovies') {
  return await getData('misc',type)
}

export async function getInitialData() {
  return await Promise.all([
  ]).then()
}

async function getData(method, type = null, id = null) {
  const endpoint =
    (type === null) ?
      replaceID(methods[method].resource, id) :
      replaceID(methods[method][type].resource, id);

  const response = await fetch(mdb.base_url + endpoint);
  return response.json();
}

// Replace ID with variable
function replaceID(string, value, replace = ':id') {
  if(value !== null)
    return string.replace(":id",value);
  return value;
}
