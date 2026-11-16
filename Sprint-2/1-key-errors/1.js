// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
/* ANSWER: Before running the code i think that the error is in the line 11 because we are trying to declare 
decimalNumber with const, when it has been already declared in the function. */

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;

  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
/* When we run the code it identifies the syntaxError that decimalNumber has already been declared, and a 
second error of reference that says that decimalNumber is not defined, and finally an illegal return statement.
To fix this we can  change the name of the variable and define 0.5 inside the function, also we need to execute 
the function convertToPercentage in the console.log*/

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());
