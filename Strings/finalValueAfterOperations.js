// Breakdown:
    // A programming language with only 4 operations
    // Operations: 2 forms on incrementing ++x, x++
    // Operations: 2 forms of decrementing --x, x--
    // x starts off with a value of 0
    // Input: an array of strings that hold the operations
    // Output: an integer of the sum of operations for the value of x

// Cases:
    // Example I:
    // Input: ['--x', '--x', 'x++', 'x--', x++'']
    // Output: -1

    // Example II:
    // Input: ['x++', '++x', 'x++', '--x']
    // Output: 2

    // Example III:
    // Input: ["--X","X++","X++"]
    // Output: 1

// Potential Solution:
    // Loop through the array
    // Define the value that each string will have
    // include addition if the element has two plus symbols preceeding x or post x
    // include subtraction if the element has two negative symbols preceeding x or post x
    // return x with its calculated value




    let finalValueAfterOperations = function(operations) {
        let X = 0;
    
        for (let operation of operations) {
            if (operation === 'X++' || operation === '++X') {
                X += 1
            } else if (operation === '--X' || operation === 'X--') {
                X -= 1
            }
        }
            return X
    };
    console.log(finalValueAfterOperations(["--X","X++","X++"]));
    console.log(finalValueAfterOperations(["++X","++X","X++"]));
    console.log(finalValueAfterOperations(["X++","++X","--X","X--"]));
    