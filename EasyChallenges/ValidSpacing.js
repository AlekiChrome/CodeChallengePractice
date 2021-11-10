// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. 

// The function should return either True or False.

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

// ? Cases:
// ? Space after the first quotation mark of the string
// ? Space before the last quotation mark of the string 
// ? Double spaces between words of encapsulated string
// ? Space before the last quotation mark of a combined string
// ? Space in an empty string
// ? No space in an empty string


const validSpacing = (s) => {
      if (s.trim === true) {
          return true
      }  else {
          return false
      }
}

console.log(validSpacing('Hello world'));
console.log(validSpacing(' Hello world'));
console.log(validSpacing('Hello world  '));
console.log(validSpacing('Hello  world'));
console.log(validSpacing('Helloworld'));
console.log(validSpacing('Helloworld '));
console.log(validSpacing(' '));
console.log(validSpacing(''));