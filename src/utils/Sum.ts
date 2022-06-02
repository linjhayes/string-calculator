/**
 * Sum an array of numbers with an optional initial value.
 *
 * Example input: [1,2,3] - expected result: 6.
 *
 * @param {Array<number>} numberArray An array of numbers to sum
 * @param {number} initialValue This is an optional parameter that is used to set an initial value to start summing from.
 * @returns {number} The sum of the numbers in the array.  If there is invalid input, such as undefined or null values, this will return 0.
 */
const Sum = (numberArray: Array<number>, initialValue?: number): number => {
  // Check if there is valid input otherwise return 0.
  if (numberArray) {
    return numberArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue != undefined ? initialValue : 0
    );
  } else {
    return 0;
  }
};

export default Sum;
