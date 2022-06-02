import { ToIntegerArray } from '../../src/utils';

beforeEach(() => {
  jest.resetModules(); // Most important - it clears the cache
});

test('Given 1,2,3 When delimited with , Then the result should equal [1,2,3]', () => {
  expect(ToIntegerArray('1,2,3', ',')).toEqual([1, 2, 3]);
});

test('Given 1@2@3 When delimited with @ Then the result should equal [1,2,3]', () => {
  expect(ToIntegerArray('1@2@3', '@')).toEqual([1, 2, 3]);
});

test('Given string with spaces When delimited with , Then the result should should equal [1,2,3]', () => {
  expect(ToIntegerArray(' 1 , 2 , 3 ', ',')).toEqual([1, 2, 3]);
});

test('Given 1%2@3,4^6 When mulitple delimiters of @,%,,^,* Then the result should equal [1,2,3]', () => {
  expect(ToIntegerArray('1%2@3,4^6', '@,%,,^,*')).toEqual([1, 2, 3, 4, 6]);
});

test('Given empty string When delimiter with $ Then the result should equal []', () => {
  expect(ToIntegerArray(' ', '$')).toEqual([]);
});

test('Given null value When delimited with $ Then the result should equal []', () => {
  expect(ToIntegerArray(null, '$')).toEqual([]);
});

test('Given 1,2,3 When delimeter is empty string Then the result should equal []', () => {
  expect(ToIntegerArray('1,2,3', '')).toEqual([]);
});

test('Given 1,2,3 When delimiter is null Then the result should equal []', () => {
  expect(ToIntegerArray('1,2,3', null)).toEqual([]);
});

test('Given 1,2,3 When delimiter is ,, Then the result should equal [1,2,3]', () => {
  expect(ToIntegerArray('1,2,3', ',,')).toEqual([1, 2, 3]);
});

//
test('Given 1|2|3,4,5 When delimiter is | Then the result should equal [1,2,3,4,5]', () => {
  expect(ToIntegerArray('1|2|3,4,5', '|,,')).toEqual([1, 2, 3, 4, 5]);
});
