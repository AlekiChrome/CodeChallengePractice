// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.

// Input Format

// A single integer, , denoting the size of the staircase.

// Constraints

// 0 < n <= 100

// Output Format

// Print a staircase of size n using # symbols and spaces.

// Note: The last line must have 0 spaces in it.

// Explanation: 
// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6

function staircase(n) {
    for (let i = 0; i < n; i++) {
        let str = ' '.repeat(n - (i + 1)) + '#'.repeat(i + 1);
        console.log(str);
    } 
}
console.log(staircase(6));