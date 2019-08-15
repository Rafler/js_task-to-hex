'use strict';

/**
 * The function takes a number and returns
 * its hexadecimal representation as a lower
 * case string. For example 255 is converted
 * то 'ff'. You should not use .toString() method.
 *
 * Conversion algorithm:
 * Divide the number by 16 with the remainder
 * 50/16 = 3 (remainder 2)
 * 3/16 = 0 (remainder 3)
 * When the whole part is 0, then we take all
 * the remainders in the reverse order
 *
 * 50 === '32'
 *
 * @param {number} value
 *
 * @return {string}
 */
function toHex(value) {
  let currentValue = value;

  if (currentValue === 0) {
    return '0';
  } let hexNum = '';
  const hexadecimalAlpabet = '0123456789ABCDEF';

  while (currentValue > 0) {
    hexNum += hexadecimalAlpabet[currentValue % 16];
    currentValue = Math.floor(currentValue / 16);
  }
  return hexNum.split('').reverse().join('');
}

module.exports = toHex;
