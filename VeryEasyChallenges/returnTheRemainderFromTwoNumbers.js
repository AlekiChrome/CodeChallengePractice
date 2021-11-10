// * Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value

// TODO: Using the modulo operater, divide two numbers
// TODO: Return the remainder of the two divided numbers

const remainder = ( a, b ) => {
    const whatRemains = a % b;

    return whatRemains;
}

console.log(remainder(1, 3))

console.log(remainder(3, 4))

console.log(remainder(-9, 45))

console.log(remainder(5, 5))