// Predict and explain first...
//  =============> write your prediction here

/* ANSWER: Before running the code i think that it might be an error because in line 10 we are trying to declare again
 str with let, and we are in the same scope*/

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
/* It identifies two errors, the both are syntax error, the first one is that the identifier str has already 
been declared, and the second one says that there is an illegal return statement. To solve this problem 
we should just assign the new value to str wthout declare it again. */

// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
