import Config from './config';
import { Sum, GetCustomDelimiter, ToIntegerArray } from './utils';

/**
 * A simple calculator that will add a delimited string of numbers together.
 * The string may contain a small control code at the beginning that defines a custom delimiter.
 * If no customer delimiter is found then a comma is used as the default delimiter.
 *
 * The custom delimiter would be defined in the following format:
 *
 * //[delimiter]\n[delimiter separated numbers]
 *
 * For example:
 *
 * A string with a custom delimiter of @ would be defined as //@\n2@3@8.  The expected result would be 13.
 * A string with no custom delimiter would be defined as 1,2,3.  The expected result would be 6.
 * A string with multiple custom delimiters would be defined as //@,$\n2@3$8.  The expected result would be 13.
 * An empty string or null value will return a 0.
 *
 * @param {string} numbers A string of delimited numbers that may contain a control code at the beginning.
 * @returns {number} The sum of the string of numbers.  If an empty string or null value is provided it will return 0
 */
const Add = (numbers: string): number => {
  // If the input is an empty string then return 0.  This will also include input with a null value.
  if (!numbers || !numbers.trim()) return 0;

  let stringOfNumbers = numbers;
  let delimiter = Config.DEFAULT_DELIMITER;

  // Get the custom delimiter
  const customDelimiter = GetCustomDelimiter(numbers);

  // Check if a custom delimiter was found
  if (customDelimiter && customDelimiter.delimiter) {
    delimiter = customDelimiter.delimiter;

    // Check if there was a remainder.  It could be possible that the string only contained a custom delimiter.
    if (customDelimiter.remainder) {
      stringOfNumbers = customDelimiter.remainder;
    } else {
      return 0;
    }
  }

  // Convert the string of numbers into an array of Integers
  const numberArray = ToIntegerArray(
    stringOfNumbers,
    delimiter,
    Config.MAX_NUMBER
  );

  // Check the array for negative numbers and throw an exception
  const hasNegative = numberArray.some((num) => num < 0);
  if (hasNegative) {
    throw new Error(Config.ERRORS.NEGATIVES_NOT_ALLOWED);
  }

  return Sum(numberArray);
};

export default Add;
