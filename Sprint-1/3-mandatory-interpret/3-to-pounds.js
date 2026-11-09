const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

/* ANSWER: 
3,4,5,6. const penceStringWithoutTrailingP = penceString.substring(  Initialises a string variable and assigns it a substring of pencesString.
8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); it declares a new constant
9,10,11,12.
14,15,16.
18. console.log(`£${pounds}.${pence}`); it prints the amount including euro symbol to the console. 
*/
