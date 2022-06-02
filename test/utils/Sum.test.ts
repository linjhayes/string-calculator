import { Sum } from '../../src/utils';

beforeEach(() => {
  jest.resetModules(); // Most important - it clears the cache
});

test('Given [1,2,3] When no initial value Then the result should equal 6', () => {
  expect(Sum([1, 2, 3])).toBe(6);
});

test('Given [1,2,3] When initial value is 2 Then the result should equal 8', () => {
  expect(Sum([1, 2, 3], 2)).toBe(8);
});

test('Given [1,2,3] When initial value is undefined Then the result should be 6', () => {
  expect(Sum([1, 2, 3], undefined)).toBe(6);
});

test('Given [1,2,3] When initial value is null Then the result should be 6', () => {
  expect(Sum([1, 2, 3], null)).toBe(6);
});

test('Given [] When no initial value Then the result should be 0', () => {
  expect(Sum([])).toBe(0);
});

test('Given null Then the result should be 0', () => {
  expect(Sum(null)).toBe(0);
});
