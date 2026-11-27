let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

/* ANSWER: there are five function calls. 
In line 4(number) (replaceall) 
line 5 (number) (replaceall) 
line 10 (console.log)
*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

/* ANSWER: The error is in line 5, the error is occurring because in Line 5 is missing the comma between "," and "". 
Arguments in a function call must be separated by commas, so JavaScript doesn't understand the line and stops with SyntaxError: missing ) after argument list.
To fix this error we should put the missing comma in line 5.  */

// c) Identify all the lines that are variable reassignment statements

/* ANSWER: 
line 4 (reassignment of carPrice)
line 5 (reassignment of priceAfterOneYear)
*/

// d) Identify all the lines that are variable declarations

/* ANSWER: 
line 1 (let carPrice)
line 2 (let priceAfterOneYear)
line 7 (const priceDifference)
line 8 (const percentageChange)
*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//ANSWER: That expression is replacing all commas from the car price and converting the resulting string into a number.
