// * Given a string S. You have to return another string such that even-indexed and odd-indexed characters of S are grouped and groups are space-separated 

//  Cases:

// ? Handles an empty string

// ? Handles a string with one CharacterData

// * 'a' => 'a' || 'a'

// ? Handles a string with an even amount of characters

// * 'ab' => 'ab' || 'ab'

// * Handles a string with an odd amount of characters

// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'


const sortMyStrings = S => {
   if (S.length < 2) return S

   let evenChars = '';
   let oddChars = '';

    for (let i = 0; i < S.length; i++) {
        if (i % 2 == 0) {
            evenChars += S[i]
        } else {
            oddChars += S[i]
        }
    }

    return `${evenChars} ${oddChars}`

}
console.log(sortMyStrings('CodeWars'));