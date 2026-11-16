// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs 399

function toPounds(pence) {
  const penceString = pence.toString();

  const paddedPenceNumberString = penceString.padStart(3, "0");

  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  const pence1 = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence1}`;
}

console.log(toPounds(24));
console.log(toPounds(399));
console.log(toPounds(1236));
