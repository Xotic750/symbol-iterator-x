import $iterator$, {getSymbolIterator} from '../src/symbol-iterator-x';

describe('symbol iterator', function() {
  it('is a symbol or string', function() {
    expect.assertions(1);
    const type = typeof $iterator$;
    const isType = ['symbol', 'string'].some((val) => val === type);
    expect(isType).toBe(true);
  });

  it('getSymbolIterator', function() {
    expect.assertions(5);
    expect(getSymbolIterator([])).toBe($iterator$);
    expect(getSymbolIterator(undefined)).toBeUndefined();
    expect(getSymbolIterator(null)).toBeUndefined();
    expect(getSymbolIterator(1)).toBeUndefined();
    expect(getSymbolIterator(true)).toBeUndefined();
  });
});
