// * A decimal number can be represented as a sequence of bits. To illustrate:

// * 6 = 00000110
// * 23 = 00010111

// * From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

// * bitwiseAND(6, 23) ➞ 00000110

// * bitwiseOR(6, 23) ➞ 00010111

// * bitwiseXOR(6, 23) ➞ 00010001

// TODO: Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

const bitwiseAND = (num1, num2) => {
    let andTotal = num1 & num2;

    return andTotal

    // return andTotal.toString(2);
}
console.log(bitwiseAND(7, 12));



const bitwiseOR = (num1, num2) => {
    let orTotal =  num1 | num2

    return orTotal;

    // return orTotal.toString(2);
}
console.log(bitwiseOR(7, 12));



const bitwiseXOR = (num1, num2) => {
    let xorTotal = num1 ^ num2

    return xorTotal;

    // return xorTotal.toString(2)
}
console.log(bitwiseXOR(7, 12));
