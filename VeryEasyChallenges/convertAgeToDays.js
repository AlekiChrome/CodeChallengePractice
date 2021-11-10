// * Create a function that takes the age in years and returns the age in days.

// ? 365 days make a year

// TODO: Create a variable that will hold the conversion
// TODO: Multiply age by 365
// TODO: Return variable

const calcAge = age => {
    const days = age * 365

    return days
}

console.log(calcAge(65))
console.log(calcAge(0))
console.log(calcAge(20))