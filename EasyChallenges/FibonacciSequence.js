// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Given n, calculate F(n)

// Example I: 
    // Input: n = 2
    // Output: 1
    // Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1


// Example II: 
    // Input: n = 3
    // Output: 2
    // Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2


// Example III:
    // Input: n = 4
    // Output: 3
    // Explanntion: F(4) = F(3) + F(2) = 2 + 1 = 3


// Solution with a while loop
    const fibonacci = (result, len) => {
        let num1 = result[0], num2 = result[1], next, cnt = 2;

        while (cnt < len) {
            next = num1 + num2;
            num1 = num2;
            num2 = next;

            result.push(next);

            cnt++
        }
        return result
    }
    console.log(fibonacci([0, 1], 10));

