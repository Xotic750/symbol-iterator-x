import symIt from '../src/symbol-iterator-x';

describe('symbol iterator', function() {
  it('is a symbol or string', function() {
    expect.assertions(1);
    const type = typeof symIt;
    const isType = ['symbol', 'string'].some((val) => val === type);
    expect(isType).toBe(true);
  });
});
