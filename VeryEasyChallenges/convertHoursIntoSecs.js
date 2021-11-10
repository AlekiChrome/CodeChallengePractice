// * Write a function that converts hours into seconds

// ? 60 seconds in a minute, 60 minutes in an hour 

// TODO: Create a variable to store the converted seconds
// TODO: Create a variable that will store mins and secs multiplied
// TODO: Multiply the value of the stored varaible by the number of hours being converted into seconds

const howManySeconds = (hours) => {
    const secsInAMin = 60;
    const minsInAHour = 60;

    const hourToSecsConversion = (secsInAMin * minsInAHour) * hours

    return hourToSecsConversion
}

console.log(howManySeconds(2))

console.log(howManySeconds(10))

console.log(howManySeconds(24))