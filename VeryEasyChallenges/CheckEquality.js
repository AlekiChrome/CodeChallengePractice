// * In this challenge, you must verify the equality of two different values given the parameters a and b.

// * Both the value and type of the parameters need to be equal. 

// * The possible types of the given parameters are:

// ? Numbers
// ? Strings
// ? Booleans (false or true)
// ? Special values: undefined, null and NaN
// ? What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

// TODO: Implement a function that returns true if the parameters are equal, and false if they are not.

const checkEquality = ( a, b ) => a === b
console.log(checkEquality(1, true));
console.log(checkEquality(0, '0'));
console.log(checkEquality(1, 1));