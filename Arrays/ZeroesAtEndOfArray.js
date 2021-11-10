// * Given an array of random numbers, Push all the zero’s of a given array to the end of the array. 

// * For example, if the given arrays is [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0], it should be changed to [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0]

// * Expected time complexity is O(n) and extra space is O(1)

const pushZeroToEnd = (arr) => {
    // A variable to hold the numbers that aren't zero
    let count = 0;

    // Loop through the array 
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] === 0)) {
            arr[count++] = arr[i];
        }
    }
    for (let i = count; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

console.log(pushZeroToEnd([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]));
console.log(pushZeroToEnd([0, 1, 5, 0, 9, 0, 2, 7, 0, 6, 2]));
console.log(pushZeroToEnd([2, 4, 7, 7, 9, 0, 0, 6, 0, 3, 4]));

 