import Add from '../src/Add';
import Config from '../src/config';

beforeEach(() => {
  jest.resetModules(); // Most important - it clears the cache
});

test('Given empty string When there are no spaces Then the result should be 0', () => {
  expect(Add('')).toBe(0);
});

test('Given empty string When there are spaces Then the result should be 0', () => {
  expect(Add(' ')).toBe(0);
});

test('Given a null value Then the result should be 0', () => {
  expect(Add(null)).toBe(0);
});

test('Given 1,2,5 When no custom delimiter defined Then the result should be 8', () => {
  expect(Add('1,2,5')).toBe(8);
});

test('Given 1\n,2,3 When there are new line characters after the number Then the result should be 6', () => {
  expect(Add('1\n,2,3')).toBe(6);
});

test('Given 1,\n2,4 When there are new line characters before the number Then the result should be 7', () => {
  expect(Add('1,\n2,4')).toBe(7);
});

test('Given \n1,\n2,4 When there are multiple new line characters Then the result should be 7', () => {
  expect(Add('\n1,\n2,4\n')).toBe(7);
});

test('Given //;\n1;3;4 When a custom delimiter of ; is used Then the result should be 8', () => {
  expect(Add('//;\n1;3;4')).toBe(8);
});

test('Given //$\n1$2$3 When a custom delimiter of $ is used Then the result should be 6', () => {
  expect(Add('//$\n1$2$3')).toBe(6);
});

test('Given //@\n When no remainder after the delimiter exists Then the result should be 0', () => {
  expect(Add('//@\n')).toBe(0);
});

test('Given //@\n-1@3@8 When a negative number exists Then throw an Error', () => {
  expect(() => {
    Add('//@\n-1@3@8');
  }).toThrowError(new Error(Config.ERRORS.NEGATIVES_NOT_ALLOWED));
});

// This test is dependent on jest.setup.js.  This will will ensure the MAX_NUMBER environment variable is set to 1000
// even if it has been overriden in .env.
test('Given 2,1001 When each number can not exceed 1000 Then the result should be 2', () => {
  expect(Add('2,1001')).toBe(2);
});

// This test is dependent on jest.setup.js.  This will will ensure the MAX_NUMBER environment variable is set to 1000
// even if it has been overriden in .env.
test('Given 2,1000 When each number can not exceed Then the result should be 1002', () => {
  expect(Add('2,1000')).toBe(1002);
});

test('Given //***\n1***2***3 When there are delimiters of arbitrary length Then the result should be 6', () => {
  expect(Add('//***\n1***2***3')).toBe(6);
});

test('Given //$,@\n1$2@3 When there are multiple delimiters Then the result should be 6', () => {
  expect(Add('//$,@\n1$2@3')).toBe(6);
});

test('Given //$,@,***\n1***2@3$5***4 When there are multiple delimiters of arbitrary length Then the result should be 15', () => {
  expect(Add('//$,@,***\n1***2@3$5***4')).toBe(15);
});

test('Given //,\n1,2,3 When the custom delimiter is a comma Then the result should be 6', () => {
  expect(Add('//,\n1,2,3')).toBe(6);
});

test('Given //,,@\n1,2@3 When there are multiple delimiters with one being a comma Then the result should be 6', () => {
  expect(Add('//,,@\n1,2@3')).toBe(6);
});
