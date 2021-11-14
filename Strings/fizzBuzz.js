// *  We're given a number in the form of an integer n.

// *  Write a function that returns the string representation of all numbers from 1 to n based on the following rules:

// TODO:  If it's a multiple of 3, represent it as "fizz".

// TODO:  If it's a multiple of 5, represent it as "buzz".

// TODO:  If it's a multiple of both 3 and 5, represent it as "fizzbuzz".

// TODO:  If it's neither, just return the number itself.

const fizzbuzz = () => {
let fizzBuzzResult = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      fizzBuzzResult.push("FizzBuzz")
    } else if (i % 5 === 0) {
      fizzBuzzResult.push("Buzz")
    } else if (i % 3 === 0) {
      fizzBuzzResult.push("Fizz")
    } else
    fizzBuzzResult.push('' + i);
  }
  return (fizzBuzzResult);
}
console.log(fizzbuzz());



// let fizzbuzzOutput = '';

// const fizzbuzz = n => {
//   let result = '';

//   for ( let i = 1; i <= n; i++ ) {
//     if ( i % 15 === 0 ) {
//       result += 'fizzbuzz'
//     } else if ( i % 5 === 0 ) {
//       result += 'buzz'
//     } else if ( i % 3 === 0 ) {
//       result += 'fizz'
//     } else
//     result += i
//   }
//   return result;
// }

// console.log(fizzbuzz(100));