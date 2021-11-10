// Write a function that converts minutes into seconds

// TODO: 60 seconds equates to 1 min. multiply minutes by 60
// TODO: create a variable to hold the conversion of minutes to seconds
// TODO: return the variable

const convert = minutes => {
    const seconds = minutes * 60
    return seconds
}
console.log(convert(5))
console.log(convert(3))
console.log(convert(2))