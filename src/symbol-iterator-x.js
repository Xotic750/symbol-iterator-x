import hasSymbolSupport from 'has-symbol-support-x';

const ES6_SHIM_ITERATOR = '_es6-shim iterator_';
const AT_AT_ITERATOR = '@@iterator';
/* eslint-disable-next-line compat/compat */
const hasRealSymbolIterator = hasSymbolSupport && typeof Symbol.iterator === 'symbol';
/* eslint-disable-next-line compat/compat */
const hasFakeSymbolIterator = typeof Symbol === 'object' && Symbol !== null && typeof Symbol.iterator === 'string';
const hasSymbolIterator = hasRealSymbolIterator || hasFakeSymbolIterator;

const getOtherSymbolIterator = function getOtherSymbolIterator(iterable) {
  if (iterable[ES6_SHIM_ITERATOR]) {
    return ES6_SHIM_ITERATOR;
  }

  if (iterable[AT_AT_ITERATOR]) {
    return AT_AT_ITERATOR;
  }

  return null;
};

const getSymIt = function getSymIt() {
  if (hasSymbolIterator) {
    /* eslint-disable-next-line compat/compat */
    return Symbol.iterator;
  }

  const result = getOtherSymbolIterator([]);

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
const $iterator$ = getSymIt();

export default $iterator$;
