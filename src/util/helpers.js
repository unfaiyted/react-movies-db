/**
 * Returns boolean value testing if the item is and Object
 * @param item
 * @returns {boolean}
 */
export function isObject (item) {
  return Object.prototype.toString.call(item) === '[object Object]'
}


/**
 * Returns % value of count and a total.
 * @param count
 * @param total
 * @returns {number}
 */
export function getPercentage (count, total) {
  return total === 0 ? 0 : parseInt(count / total * 100, 10)
}


/**
 * Function returns a shorter version of the text and appends the ellipsis to the end of the text value.
 * @param text
 * @param maxLength
 * @returns {*}
 */
export function shortenText(text,maxLength) {
  if(text.length > maxLength) {
    return text.substring(0,maxLength) + '...';
  }
  return text;
}

/**
 * Function returns the value of the parameter passed in th URL
 * @param name
 * @returns {string | null}
 */
export function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}


/**
 * Function returns a random integer between the MIN and MAX values defined at runtime.
 * @param min
 * @param max
 * @returns {number}
 */
export function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min) ) + min);
}


/**
 * Creates a Object extension to allow for filtering on an object at the global scope.
 * @param obj
 * @param predicate
 * @returns {{} & {[p: string]: undefined}}
 */
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter( key => predicate(obj[key]) )
    .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );


