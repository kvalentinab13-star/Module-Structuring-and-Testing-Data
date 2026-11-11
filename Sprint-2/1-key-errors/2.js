
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

/*ANSWER: We are getting an error because we haven`t assign a a value to num and we are defining the function with 3 
 but we should use it to call the function*/

function square(3) {

    return num * num;
}

// =============> write the error message here
/*Uncaught SyntaxError: Unexpected number
>     return num * num;
    return num * num;
    ^^^^^^

Uncaught SyntaxError: Illegal return statement
> }
*/

// =============> explain this error message here

/*The error is saying that we have write a number in the function definition and the second one is because of the first
error that dont recognize clearly the return inside the function. */

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {

    return num * num;
}

console.log(square(3));

