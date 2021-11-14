// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// breakdown: 
  // Input: arr of 10 integers (0 - 9)
  // Output: string of 10 integers converted in form of phone number

// Cases: 
  // Example I:
  // Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  // Output: '(123) 456-7890'

  // Eample II:
  // Input: [2, 5, 7, 2, 4, 6, 1, 1, 8, 9]
  // Output: '(257) 246-1189'

  // Possible Solution: 
    // Turn the arr into a string
    // Separate the string into multiple parts using variables
    // handle the first section first by targetting the first three of numbers
    // encapsulate those numbers in parenthesis and store them in a variables
    // target the following 6 numbers and separate them into two sections of three seperated by a dash in the center




  const createPhoneNumber = numbers => {
    // turn the array to a string
      let str = numbers.join('');

    // Handle the parenthesis number
      let areaCode = `(${str.substring(0, 3)})`

    // seperate the following 6 numbers and into two parts of three separated by a dash
    let body = `${str.substring(3, 6)}-${str.substring(6)}`
    // console.log(body);

    return `${areaCode} ${body}`   
  }
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));