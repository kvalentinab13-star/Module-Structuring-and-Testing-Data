// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//ANSWER: I think that is going to return always the last number of num 103.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

/*> const num = 103;
undefined
> 
> function getLastDigit() {
|   return num.toString().slice(-1);
| }
undefined
> 
> console.log(`The last digit of 42 is ${getLastDigit(42)}`);
The last digit of 42 is 3
undefined
> console.log(`The last digit of 105 is ${getLastDigit(105)}`);
The last digit of 105 is 3
*/

// Explain why the output is the way it is
// =============> write your explanation here
/*ANSWER: The output is like that cause we`re declaring num with const in the global scope so we`re getting always the last number of 103. 
To solve this we should put num as a parameter of the function getLastDigit. */

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
