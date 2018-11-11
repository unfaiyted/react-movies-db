// Create the keys.json with your api keys
import KEY from './keys';

const key = KEY.key;
export default () => {
  console.log(key.v4)
  return {
    'Content-Type': ' application/json;charset=utf-8',
    'Authorization': `Bearer ${key.v4}`
}
}

//
// export function authHeader() {
//   //return this header if user is authenticated stored
//   const oAuth = JSON.parse(localStorage.getItem('oAuth'));
//
//   if (oAuth && oAuth.access_token) {
//
//     console.log(oAuth);
//
//     return {
//       'Authorization': `Bearer ${oAuth.access_token}`
//     }
//   }
//   return {};
// }
