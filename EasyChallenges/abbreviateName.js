
function abbrevName(name){
    const answer = [name[0]]
    for(let i = 0; i < name.length; i++) {
        if(name[i] === " ") {
            answer.push(name[i + 1]);
        }
    }
    return answer.map(el => el.toUpperCase()).join(".")
}

// Optimized Solution
// function abbrevName(name){
//     return name.split(" ").map(el => el[0].toUpperCase()).join(".")
//  }
 console.log(abbrevName('Candice Altovise Alexis Agard'))