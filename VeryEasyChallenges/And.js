// * JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

// * Consider a && b:

// ? a is checked if it is true or false.
// ? If a is false, false is returned.
// ? b is checked if it is true or false.
// ? If b is false, false is returned.
// ? Otherwise, true is returned (as both a and b are therefore true ).
// ? The && operator will only return true for true && true.

// TODO: Make a function using the && operator.

const and = (a, b) => a && b;

console.log(and(true, false));
console.log(and(true, true));
console.log(and(false, true));
console.log(and(false, false));