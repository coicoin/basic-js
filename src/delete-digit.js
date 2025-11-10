const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let chars = String(n);
  let max = 0;
  let i = 0;
  while (i < chars.length) {
    max = Math.max(max, Number.parseInt(`${chars.slice(0, i)}${chars.slice(i + 1)}`));
    i++;
  }
  return max;
}

module.exports = {
  deleteDigit
};
