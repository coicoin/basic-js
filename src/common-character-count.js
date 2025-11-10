const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const mapS1 = new Map();
  const mapS2 = new Map();
  let count = 0;
  for (let ch of s1) {
    let chCount = mapS1.get(ch) ?? 0;
    mapS1.set(ch, chCount += 1);
  }
  for (let ch of s2) {
    let chCount = mapS2.get(ch) ?? 0;
    mapS2.set(ch, chCount += 1);
  }

  for (let [key, value] of mapS1) {
    count += Math.min(value, mapS2.get(key) ?? 0);
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
