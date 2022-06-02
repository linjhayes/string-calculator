/**
 * This will convert a string of delimited values into an array of integers.
 * It will also optionally ignore values that exceed a maximum value.
 * The delimiter may also contain multiple delimiters.  If multiple delimiters are provided they must be comma separated.
 *
 * Example input: '1@2@3' delimited by '@' expected result: [1,2,3].
 *                '1@2@3,1001' delimited by @ with a maximum number of 1000 expected result: [1,2,3,0].
 *                '1$2@3 delimited by '$,@' expected result [1,2,3]
 *
 * @param {string} stringOfNumbers An array of numbers to sum
 * @param {string} delimiter The delimiter used to split the string of numbers.  This may contain multiple delimiters.  If multiple delimiters are
 *                           provided they must be delimited by a comma.  For example, '$,@' would contain 2 delimiters to split the string by.
 * @param {number} maxNumber This is an optional parameter that is used to set a maximum value allowed in the array of integers.
 * @returns {number} An array of integers.  If there is invalid input, such as null or undefined values, an empty array will be returned.
 */
const ToIntegerArray = (
  stringOfNumbers: string,
  delimiter: string,
  maxNumber?: number
): Array<number> => {
  // Check for valid input
  if (stringOfNumbers && stringOfNumbers.trim() && delimiter) {
    let regexp: string | RegExp = delimiter;

    // This is an edge case where the delimiter is a comma.  If it is a single
    // comma then don't create a RegEx for this.
    if (delimiter !== ',') {
      const delimiterArray = delimiter.split(',');
      // Check if the control code contains multiple delimiters.
      if (delimiterArray && delimiterArray.length > 1) {
        // Build a regular expression that will split the string of numbers by all of the delimiters
        regexp = new RegExp(`[${delimiter.replace(',', '|')}]+`);
      }
    }

    // Split the string of numbers by using a regular expression.  This
    // is able to split the string if multiple delimiters are provided.
    return stringOfNumbers.split(regexp).map((item: string) => {
      // Safely convert a string to an integer.
      let num = parseInt(item.trim());

      // Check if a maxNumber has been provided and if it has been exceeded.
      if (maxNumber != undefined && num > maxNumber) {
        num = 0;
      }

      return num;
    });
  } else {
    return [];
  }
};

export default ToIntegerArray;
