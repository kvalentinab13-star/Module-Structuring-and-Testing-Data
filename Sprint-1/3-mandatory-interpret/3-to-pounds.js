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

//ANSWER:
//lines 3,4,5,6. const penceStringWithoutTrailingP = penceString.substring()  Initialises a string variable and assigns it a substring of pencesString.
/*line 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); it declares a new constant, and what is doing is making that the number 
had always a minimum length of three characters, and it add 0 at the beginning when is necessary. */
/*line 9,10,11,12. line 9 is creating a the variable pounds, and is taking the last characters of paddedPenceNumberString.
then, in lines 10 to 12, check if it has at least 2 characters, and if not it would add a 0 at the end. */
/* lines 14,15,16. are creating the variable pence. is taking the previous characters of paddedPenceNumberString wthout the last two characters. 
then it checks that had at least 2 characters if not would add 0 at the end. */
//18. console.log(`£${pounds}.${pence}`); it prints the amount including pound symbol to the console.
