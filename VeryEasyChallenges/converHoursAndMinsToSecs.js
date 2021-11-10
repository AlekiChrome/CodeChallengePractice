// * Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

const convert = (hours, mins) => {
    let hoursToSecs = (hours * 60) * 60;
    let minsToSecs = (mins * 60);

    return hoursToSecs + minsToSecs;

}
console.log(convert(1, 3));
console.log(convert(2, 0));
console.log(convert(0, 0));