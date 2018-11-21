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

export function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

// Adds object filter capability
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter( key => predicate(obj[key]) )
    .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );


