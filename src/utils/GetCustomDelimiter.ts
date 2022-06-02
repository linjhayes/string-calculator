import AppConfig from '../config/Config';
import { CustomerDelimiter } from '../interfaces/CustomDelimiter.type';

/**
 * Parse a string of numbers where the string may contain a small control code at the beginning of the string that defines a custom delimiter.
 * This function will return a tuple that contains the delimiter as well as the remainder of the text that appears after the control code.
 *
 * The format for the custom delimiter is as follows:
 *
 * //[delimiter]\n[delimiter separated numbers]
 *
 * Example input: '//;\n1;2;3' - expected result: { delimiter: ';', remainder: '1;2;3' }
 *                '//@,$\n1@2$3@4 - expected result: { delimiter: '@,$', remainder: '1@2$3@4' }
 *
 * @param {string} numbers A delimited string of numbers that may be prefixed with a control code.
 * @returns {CustomerDelimiter} A tuple containing the custom delimiter and the remainder of the string not including the customer delimiter.
 *                              If the input in invalid, such as a null or undefined value, a null value will be returned.
 */
const GetCustomDelimiter = (numbers: string): CustomerDelimiter => {
  // Check if there is valid input otherwise return null
  if (!numbers || !numbers.trim()) return null;

  let delimiter = '';
  let remainder = numbers;

  // Finds the first substring that matches this pattern and split the string into parts.
  const parts = numbers.split(new RegExp(AppConfig.CONTROL_CODE_REGEX));

  if (parts && parts.length > 0) {
    delimiter = parts[1];
    remainder = parts[2];
  }

  return {
    delimiter,
    remainder,
  };
};

export default GetCustomDelimiter;
