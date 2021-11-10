// * Create a function that returns true when num1 is equal to num2
// * Otherwise return false

// ? cases: 
// ? Are both parameters the same data type?
// ? Are both parameters strictly equal?
// ? Is one parameter over or under zero?

const isSameNum = (num1, num2) => num1 === num2 ? true : false;
console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));
console.log(isSameNum(2, '2'));