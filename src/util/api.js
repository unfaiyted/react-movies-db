//https://www.themoviedb.org/documentation/api
import  mdb, { methods } from './endpoints';
import {key} from './security/keys';
import headers from './security/headers';

async function search(type = "Movie") {
  return await fetchData('search',type)
}

async function discover(type = "Movie") {
  return await fetchData('discover',type)
}

async function find(id) {
  return await fetchData('find', id)
}

// Singular Movie and TV
async function getMovie(id, type = 'Info') {
  return await fetchData('movie',type, id)
}

async function getTvShow(id, type = 'Info') {
  return await fetchData('tv',type, id)
}


// Pulls a List by a specific type
async function getMisc(type = 'LatestMovies') {
  return await fetchData('misc',type)
}


export async function getInitialData() {
  return await Promise.all([
    getMisc('TopRatedMovies'),
    getMisc('UpcomingMovies'),
    getMisc('PopularMovies'),
  ]).then(([
      topRatedMovies,
      upcomingMovies,
      popularMovies
     ]) => ({
      topRatedMovies,
      upcomingMovies,
      popularMovies
  }));
}



// Primary function used to fetch all data
async function fetchData(method, type = null, id = null) {
  const apiKey = '?api_key='+ key.v3;
  const endpoint =
    (type === null) ?
      replaceID(methods[method].resource, id) :
      replaceID(methods[method][type].resource, id);


  const PARAMS = {
      method: 'GET',
      // credentials: 'include',
      headers: headers(),
    };

  const response = await fetch(mdb.base_url + endpoint + apiKey);
  return response.json();
}

// Replace ID with variable
function replaceID(string, value, replace = ':id') {
  if(value !== null)
    return string.replace(":id",value);
  return string;
}
