// * Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// ? Wins get 3 points
// ? Draws get 1 point
// ? Loses get 0 points

const footballPoints = ( wins, draws, losses ) => {
   return (wins * 3) + (draws * 1) + (losses * 0);
}

console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));

