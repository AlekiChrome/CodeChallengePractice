const vowelsAndConsonants = s => {
    let result = s.split("");
    let vowels = ['a', 'e', 'i', 'o', 'u']
    console.log(result)

    for (let i = 0; i < result.length; i++) {
        for (let j = i; j < vowels.length; j++) {
            if (result[i] === vowels[i]) {
            }
        
        }
    }

} 
vowelsAndConsonants('javascriptloops')