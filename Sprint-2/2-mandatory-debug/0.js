// Predict and explain first...

// =============> write your prediction here
/*ANSWER: I think that if we run the function we are going to have the result because we are using the console to printed, but the the function 
itself is wrong `cause we`re not returning the value of (a*b)  */

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//To solve this error we should write inside our function the return statement, and then call it with console.log.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}
console.log(multiply(10, 32));
