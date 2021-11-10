// * Given an array of integers your solution should find the smallest integer.

// * For example:
// ? Given [34, 15, 88, 2] your solution will return 2
// ? Given [34, -345, -1, 100] your solution will return -345
// ? You can assume, for the purpose of this kata, that the supplied array will not be empty.

const smallestIntegerFinder = arr => {
    let result = Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < result) {
            result = arr[i]
        }
    }
    return result
}

// const smallestIntegerFinder = arr => {
//     return Math.min(...arr);
// }


console.log(smallestIntegerFinder([34, 15, 88, 2]));
console.log(smallestIntegerFinder([34, -345, -1, 100]));