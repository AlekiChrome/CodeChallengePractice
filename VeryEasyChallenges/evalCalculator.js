// * Create a function that will handle simple math expressions. The input is an expression in the form of a string.

const calculator = (str) => eval(str);

console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));