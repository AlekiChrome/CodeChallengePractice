// * Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter,
// * That takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// * The geese are any strings in the following array, which is pre-populated in your solution:

// ? geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// * For example, if this array were passed as an argument:

// ? ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// * Your function would return the following array:

// ? ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

const birds1 = [];
const birds2 = ["Mallard", "Hook Bill", "Crested", "Blue Swedish"];
const birds3 = ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]

function gooseFilter(birds) {
  const geese = [ "Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];

  let sepBirds = [];

  for (let i = 0; i < geese.length; i++) {
    for (let j = i + 1; j < birds.length; j++) {
        if ( geese[i].length !== birds[i].length) {
            return []
        } else if ( geese[i] ) {

        }
    return sepBirds;
  }
 }
}

console.log(gooseFilter(birds1));
console.log(gooseFilter(birds2));
console.log(gooseFilter(birds3));
