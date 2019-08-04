function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import hasSymbolSupport from 'has-symbol-support-x';
import isNil from 'is-nil-x';
var ES6_SHIM_ITERATOR = '_es6-shim iterator_';
var AT_AT_ITERATOR = '@@iterator';
/* eslint-disable-next-line compat/compat */

var hasRealSymbolIterator = hasSymbolSupport && _typeof(Symbol.iterator) === 'symbol';
/* eslint-disable-next-line compat/compat */

var hasFakeSymbolIterator = (typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) === 'object' && Symbol !== null && typeof Symbol.iterator === 'string';
var hasSymbolIterator = hasRealSymbolIterator || hasFakeSymbolIterator;

var getOtherSymbolIterator = function getOtherSymbolIterator(iterable) {
  if (iterable[ES6_SHIM_ITERATOR]) {
    return ES6_SHIM_ITERATOR;
  }

  if (iterable[AT_AT_ITERATOR]) {
    return AT_AT_ITERATOR;
  }

  return null;
};

var getSymIt = function getSymIt() {
  if (hasSymbolIterator) {
    /* eslint-disable-next-line compat/compat */
    return Symbol.iterator;
  }

  var result = getOtherSymbolIterator([]);

  if (typeof result === 'string' && typeof [][result] === 'function') {
    return result;
  }

  return AT_AT_ITERATOR;
};
/**
 * Whenever an object needs to be iterated (such as at the beginning of a for..of loop),
 * its @@iterator method is called with no arguments, and the returned iterator is used
 * to obtain the values to be iterated.
 *
 * Possible values are.
 *
 * Symbol.iterator
 * '_es6-shim iterator_'
 * '@@iterator'.
 *
 * @type {symbol|string}
 */


var $iterator$ = getSymIt();
/**
 * Detect an iterator function.
 *
 * @private
 * @param {*} iterable - Value to detect iterator function.
 * @returns {symbol|string|undefined} The iterator property identifier.
 */

export var getSymbolIterator = function getSymbolIterator(iterable) {
  if (isNil(iterable) === false) {
    if (hasSymbolIterator && iterable[$iterator$]) {
      return $iterator$;
    }

    var result = getOtherSymbolIterator(iterable);

    if (typeof result === 'string') {
      return result;
    }
  }
  /* eslint-disable-next-line no-void */


  return void 0;
};
export default $iterator$;

//# sourceMappingURL=symbol-iterator-x.esm.js.map