// * Given a signed 32-bit integer x, return x with its digits reversed. 

// * If reversing x causes the value to go outside the signed 32-bit integer range [-2 to the 31st power, 2 to the 31st power - 1], then return 0.

const reverse = x => {
   return (
      parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)
    )                 
  }
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));