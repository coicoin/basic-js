const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let remain = 0; 
  let sum = 0;
  while (sum >= 10 || n > 0 || remain > 0) {
    remain = n % 10; //100 = 0, 0
    n = Math.floor(n / 10);
    sum += remain;
    if (n === 0 && sum >= 10) {
      n = sum;
      sum = 0;
    }
  }

  return sum;
}

module.exports = {
  getSumOfDigits
};
