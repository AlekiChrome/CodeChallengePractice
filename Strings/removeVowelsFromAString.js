// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

// Breakdown:
  // There's a str s
  // If the str has any vowels in it (a, e, i, o, u)
  // remove those letters from the str
  // return the str with the vowels removed

// Cases:
  // Example I:
  // Input: "leetcodeisacommunityforcoders"
  // Output: "ltcdscmmntyfrcdrs"

  // Example II:
  // Input: "Cisforcookie"
  // Output: "Csfrck"

  // Example III:
  // Input: "anamonapia"
  // Output: "nmnp"

  // Possible Solution:
    // I want to have a variable that specifies what vowels are
    // I want to identify that I want to remove the characters that make up vowels from the given string
  // I want to return that string with the vowels removed

  const removeVowels = s => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let singleStr = s.split('');
    let result = [];

    for (let i = 0; i < singleStr.length; i++) {
      if (!(vowels.includes(singleStr[i]) === true)) {
        result.push(singleStr[i])
      }
    }
    return result.join('');
  }
console.log(removeVowels('leetcodeisacommunityforcoders'));