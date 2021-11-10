// * Given an array of integers.

// * Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// * If the input array is empty or null, return an empty array.

// ? Cases: 

// ? Is the arr empty/null

// TODO: Return an arr
// TODO: The returned arr needs to include an element of how many positive numbers there are
// TODO: The returned arr needs to include an element of the sum of all the negative numbers
// TODO: If the input array is empty or null the returned arr should be empty

const countPositivesSumNegatives = input => {

    let result = [];
    let total = [];
    let sum = 0;

    if (input.length === 0 || input.length === null) {
        return result
    }

    for (let i = 0; i < input.length; i++) {

        if ( input[i] > 0 ) {
            result.push(input[i])
        } else if (input[i] < 0 ) {
            sum += input[i]
        } 
    }

    total.push(result.length, sum)
    
    return total;

}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([]));
