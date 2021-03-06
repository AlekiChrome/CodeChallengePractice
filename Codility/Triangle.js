// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
// For example, consider array A such that:

//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// Triplet (0, 2, 4) is triangular.

// Write a function:

// function solution(A);

// that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

// For example, given array A such that:

//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// the function should return 1, as explained above. Given array A such that:

//   A[0] = 10    A[1] = 50    A[2] = 5
//   A[3] = 1
// the function should return 0.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

// ? Cases:

// ! an empty area
[] = 0;

// ! Three positive values
// [1, 2, 3] => 0
// [2, 2, 3] => 0

// 2 + 2 > 3
// 2 + 3 > 2
// 2 + 3 > 2

// ! less than 3 positive numbers: always 0
// [-2, 5, 6] => 0
// [-1, 2, 1] => 0

// ! more than three positive values
// [3, 4, 2, 5] => 1
// [1, 10, 50, 2] => 0

// Brute force approach:
// loop
    // loop
        // check for triangle
            // if triangle
                // return 1

// after all loops return 0;

// sorting ?

// skip all negative numbers