//Before running the code i think that is not working because const is declaring the variable as a number.
/* After running the code the error  that gives is that cardNUmber.slice is not a function, and the reason is because cardNumber holds a number,
and slice is a method that exists on strings (and arrays), not on numbers. */
//To solve the problem we should turns the number into string, as it follows:
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
