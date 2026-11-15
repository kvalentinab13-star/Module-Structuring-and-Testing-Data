// Predict and explain first...
//  =============> write your prediction here
/* ANSWER: I think that if we run the code we`re going to print the result of the sum of (10 + 32), but, the function itself is not correct
because the return statement is not writing correctly.
*/

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// To correct this  we can write the return statement again and then call with console.log the function sum(a,b).
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 32));
