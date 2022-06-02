import { GetCustomDelimiter } from '../../src/utils';

beforeEach(() => {
  jest.resetModules(); // Most important - it clears the cache
});

test('Given //;\n1;2;3 When custom delimiter equal to ; and remainder equal to 1;2;3 Then the result should be a delimiter of ; and remainder of 1;2;3', () => {
  expect(GetCustomDelimiter('//;\n1;2;3')).toEqual({
    delimiter: ';',
    remainder: '1;2;3',
  });
});

test('Given //;\n When no remainder present Then the result should be a delimiter and remainder that are empty strings', () => {
  expect(GetCustomDelimiter('//;\n')).toEqual({
    delimiter: ';',
    remainder: '',
  });
});

test('Given //!,@\n1!2@3 When multiple delimiters of ! and @ exist Then the result should be a delimiter of !,@ and remainder of 1!2@3', () => {
  expect(GetCustomDelimiter('//!,@\n1!2@3')).toEqual({
    delimiter: '!,@',
    remainder: '1!2@3',
  });
});

test('Given an empty string When no delimiter or remainder is defined Then the result should be null', () => {
  expect(GetCustomDelimiter(' ')).toEqual(null);
});

test('Given a null value Then the result should be null', () => {
  expect(GetCustomDelimiter(null)).toEqual(null);
});
