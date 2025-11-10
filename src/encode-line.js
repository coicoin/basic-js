const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let encoded = [];
  for (let i = 0; i < str.length; i++) {
    let currentCh = str.charAt(i);
    let chCount = 1;
    while (i < str.length && str.charAt(i + 1) === currentCh) {
      chCount++;
      i++;
    }
    if (chCount > 1) {
      encoded.push(chCount);
    }
    encoded.push(currentCh);
  }
  return encoded.join("");
}

module.exports = {
  encodeLine
};
