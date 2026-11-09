const minimum = 1;
const maximum = 100;


const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/* num represents the stored value of an operation that finds a random number between the minimum and maximum values. 
Math.random generates the random number and Math.floor rounds it down to the nearest integer, and adding minimun it allow us to change the range 
from 0 - 99 to 1 - 100. */

