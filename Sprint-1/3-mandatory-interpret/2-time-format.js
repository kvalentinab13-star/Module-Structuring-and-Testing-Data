const movieLength = 160.8; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// ANSWER: There are 6 variable declarations.

// b) How many function calls are there?

//ANSWER: There are 1 function call. console.log(result).

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//ANSWER: It represents the remaining seconds after converting the movie length into whole minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//ANSWER: It calculates the total number of whole minutes in the movie length.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// ANSWER: It represents the movie length as hours, minutes and seconds.  a better name could be movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//ANSWER:
/*if we try negative value for movieLength it would give us not a valid duration. for example with const movieLength = -4567. it would give us -1:-16:-7.
if we try with a value pf zero for movieLength it would also give us not a valid duration. const movieLength = 0. it would give us 0:0:0.
but the result is matematichally correct. 
if we try with a very large number it would give us a result matematically correct.
const movieLength = 4567800 would give us 1268:50:0. 
if we try with decimal numbers, it would accept the decimal value and does the convertion. but with imprecision. 
const movieLength = 160.8 it would give us 0:2:40.80000000000001. 
*/
