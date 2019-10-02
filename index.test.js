const calc = require('./');

test('adds 1 + 2 to equal 3', () => {
  expect(calc.sum(1, 2)).toBe(3);
});


test('subs 1 - 2 to equal -1', () => {
    expect(calc.sub(1, 2)).toBe(-1);
  });