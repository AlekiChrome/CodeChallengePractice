// * In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 

// * The farmer breeds three species:

// * Chickens = 2 legs
// * cows = 4 legs
// * pigs = 4 legs

// * The farmer has counted his animals and he gives you a subtotal for each species. 

// * You have to implement a function that returns the total number of legs of all the animals.

// ? Cases:

// ? Which order are the animals being called in ? 

const animals = ( chickens, cows, pigs ) => {
    let total = ( chickens * 2) + ( cows * 4) + ( pigs * 4 );
 
    return total
 
 }
 console.log(animals(2, 3, 5));
 console.log(animals(1, 2, 3));
 console.log(animals(5, 2, 8));