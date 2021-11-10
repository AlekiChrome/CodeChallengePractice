// Have a variable for the string that I want to return
// Have a variable for the count of the letters
// Loop through string of characters
// increment the count on each iteration 
// have a condition that checks for matching characters
// add the character to the returning string as well as the count of char
// return that result

 

function stringCompressor (string) {
    let result = '';
    let letterCount = 0;
  
    for (let i = 0; i < string.length; i++) {
      letterCount++;
      if (!(string[i] === string[i + 1])) {
        result += string[i] + letterCount
        letterCount = 0;
      }
    }
    return result;
  };
  console.log(stringCompressor('aaabbacca'));