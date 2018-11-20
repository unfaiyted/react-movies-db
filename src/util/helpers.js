export function isObject (item) {
  return Object.prototype.toString.call(item) === '[object Object]'
}

export function getPercentage (count, total) {
  return total === 0 ? 0 : parseInt(count / total * 100, 10)
}


// Shorten the text and append ellipsis. 
export function shortenText(text,maxLength) {
  if(text.length > maxLength) {
    return text.substring(0,maxLength) + '...';
  }
  return text;

}


Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter( key => predicate(obj[key]) )
    .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );


