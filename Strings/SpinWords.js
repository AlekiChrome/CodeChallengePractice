// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// Breakdown:
  // Input: multi word str
  // Output: the same str w/ words > 5 chars reversed
  // strings will consist of only letters and spaces
  // spaces will only be included when more than one word is present

// cases:
  // Example I:
  // Input: 'Hi how are you'
  // Output: 'Hi how are you';

  // Example II:
  // Input: 'The alligators grabbed the man'
  // Output: 'The srotagilla debbarg the man';

  // Possible sollution: 
    // I want to split the string to separate the single string to an array that holds string elements of each word
    // I want to loop through the arr
    // I want to create a condition that identifies the words that are of a length greater than 5
    // I want to reverse those specific words
    // I want to rejoin the string to a single str element
    // I want to return the string with reversed words

    const spinWords = string => {
        let str = string.split(" ");
        let result = [];
  
        for (let i = 0; i < str.length; i++) {
          if (str[i].length >= 5) {
            result.push(str[i].split('').reverse().join(''));
          } else {
            result.push(str[i]);
          }
        }
        return result.join(' ');
      }
      console.log(spinWords('The alligators grabbed the man'));