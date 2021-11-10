// Problem breakdown:
// param will be a num
// return a string
// string will be returned with dashes inbetween consecutive odd nums
// so no dash at the end, only bet nums

// varaible to return my new string
// Potential Solution:
// Convert to a string
// loop through characters
// if the string 
// Want to identify the even/odd numbers. 

// Output cases:
// insertDash(454793) // "4547-9-3"
// insertDash(467497) // "46749-7"


const insertDash = num => {
    let newStr = '';
    let mutation = num.toString();
    let mutateTwo = mutation.split('');
  
    console.log(mutateTwo);
  
    for (let i = 0; i < mutateTwo.length; i++) {
      if (mutateTwo[i] % 2 === 1 && mutateTwo[i + 1] % 2 === 1) {
        // console.log(`Please put dashes bet: ${mutateTwo[i]} and ${mutateTwo[i + 1]}`);
        newStr +=  mutateTwo[i] + '-' + mutateTwo[i + 1];
      } else {
          newStr += mutateTwo[i]
      }
    }
    return newStr
  
  }
  console.log(insertDash(454793));
  console.log(insertDash(467497));