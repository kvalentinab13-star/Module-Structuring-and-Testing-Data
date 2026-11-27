// Error: TypeError: Assignment to constant variable.
// const creates a variable that can't get a new value, so line 4 fails.
let age = 33;
age = age + 1;
console.log(age);
