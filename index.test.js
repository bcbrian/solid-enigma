const calc = require('./');

test('adds 1 + 2 to equal 3', () => {
  expect(calc.sum(1, 2)).toBe(3);
});


test('subs 1 - 2 to equal -1', () => {
  expect(calc.sub(1, 2)).toBe(-1);
});

test('muls 1 * 2 to equal 2', () => {
  expect(calc.mul(1, 2)).toBe(2);
});

test('muls 1 * 3 to equal 3', () => {
  expect(calc.mul(1, 3)).toBe(3);
});

