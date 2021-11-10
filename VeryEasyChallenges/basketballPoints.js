// * You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value. 

// * How many points have been scored?


const points = (twoPointers, threePointers) => {
    let two = twoPointers * 2;
    let three = threePointers * 3;

    let pointTotal = two + three;

    return pointTotal;
   
}

console.log(points(1, 1));

console.log(points(7, 5));

console.log(points(38, 8));