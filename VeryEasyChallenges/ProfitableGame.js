// * Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay
// * Otherwise return false 

const profitableGame = ( prob, prize, pay ) => (prob * prize) > pay ? true : false;

console.log(profitableGame(0.2, 50, 9));
console.log(profitableGame(0.9, 1, 2));
console.log(profitableGame(0.9, 3, 2));