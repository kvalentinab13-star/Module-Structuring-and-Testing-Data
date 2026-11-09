const movieLength = 8784; // length of movie in seconds

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

//ANSWER: There are 3 function calls.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//ANSWER: It represents the remaining seconds after converting the movie length into whole minutes. 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//ANSWER: It calculates the total number of whole minutes in the movie length.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// ANSWER: It represents the movie length as hours, minutes and seconds.  a better name could be movieDuration. 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//ANSWER: The code would work for all values, because uses the value of movieLength to calculate the hours, minutes, and seconds. So if we changed it, it will work.