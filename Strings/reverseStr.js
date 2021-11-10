// // TODO: Given an input string, reverse the string word by word.
// // ! Input : "Reverse word in a string"
// // ! Output : "string a in word Reverse"


// // * Can you write a function that reverses an inputted string without using the built-in Array#reverse method?

// // * Reverse a string 1

// // TODO: Reverse each word in the string
// // TODO: Reverse string with a decrementing for loop

// const reverseStr = str => {
//     let reversedStr = '';
//     let inputStr = str.split(' ');

//     for (let i = inputStr.length - 1; i >= 0; i--) {
//         reversedStr += inputStr[i] + ' ';
//     }
//     console.log(reversedStr)
// }

// reverseStr('Reverse word in a string');


// // * Reverse a string 2

// // TODO: Reverse the characters of each word and the words that make up the strink
// // TODO: Reverse string with a decrementing for loop

// function reverseString(str) {
//     let revStr = "";
//     let inputStr = str.split('');
    
//     for (let i = inputStr.length - 1; i >= 0; i--) {
//       revStr += inputStr[i] + "";
//     }
//     return revStr;
//   }
//   console.log(reverseString('Reverse word in a string'));


//   // * Reverse a string 3

//   // TODO: Reverse a string using the two pointer technique

//   const strReversal = str => {
//     let strArr = str.split("");
//     let start = 0;
//     let end = str.length - 1;

//     while (start <= end) {
//       const temp = strArr[start];
//       strArr[start] = strArr[end]
//       strArr[end] = temp;
//       start++;
//       end--;
//     }
//     return strArr.join("")
//   }

//   console.log(strReversal('Reverse word in a string'));
//   console.log(strReversal('double spaces'));

//   // * Reverse a string 4


// const reverseWords = str => {
//     return str.split(" ").map(
//       function (word) {
//         return word.split("").reverse().join("");
//       })
//       .join(" ");
//   }
//   console.log(reverseWords('double spaces'));



//   // * Reverse a string 5

//   const reverse = str => {
//     let rev = '';

//     for (let i = str.length - 1; i >= 0; i--) 
//         rev += str[i]
//         return rev
// }
// console.log(reverse('double spaces'));

// * Reverse a String 6

const revString = str => {
  return str.split('').reverse().join('');
}
console.log(revString('double spaces'));

  
  