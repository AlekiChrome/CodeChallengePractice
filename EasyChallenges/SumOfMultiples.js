// * Find the sum of all multiples of n below m
// * m is excluded from the multiples 

// ? Cases
// * n greater than m
// * n equal to m
// * n is less than m and m is a factor of n
// * n is less than m and m is not a factor of n
// * n or m is invalid

const sumMul = (n, m) => {
    // TODO: Make a total
    let result = 0;

   if (n > m || n < 1 || m < 1) {
       return 'INVALID'
   }

    // TODO: Make a loop
    // TODO: In every iteration get a multiple of n
   for (let i = n; i < m; i += n) {
        result += i
    }
    // TODO: Return total
    return result;
}
console.log(sumMul(2, 9));
console.log(sumMul(3, 13));
console.log(sumMul(4, 123));
console.log(sumMul(2, 8));
console.log(sumMul(4, 12));
console.log(sumMul(4, -7));
console.log(sumMul(0, 0));
console.log(sumMul(-1, 12));
console.log(sumMul(3, -12));