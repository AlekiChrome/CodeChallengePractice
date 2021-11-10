// * Create a function that takes a boolean variable flag and returns it as a string.

const boolToString = flag => {

    // return `${flag}`;
 
    // return flag.toString();
 
    const strBool = new String(flag)
    return JSON.stringify(strBool)
    
 }
 console.log(boolToString(true));
 console.log(boolToString(false));