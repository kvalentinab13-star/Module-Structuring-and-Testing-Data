// add your completed function from key-implement here
function isProperFraction(numerator, denominator) {
  if (numerator < denominator) return true;
  if (numerator >= denominator) return false;
  if (numerator === denominator) return false;
  if ((numerator = 0 && denominator > 0)) return true;
}

module.exports = isProperFraction;
