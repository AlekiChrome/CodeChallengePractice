let Array = [2,5,7,5,3,1,6,8];

const reverseArray = arr => {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return newArr;
  }

console.log(reverseArray(Array));

const twoDArray = n => {
  
    for (let i = 0; i < n.length; i++) {
      n[i].reverse();
   }
    return n.reverse();
  }
  console.log(twoDArray([[3, 2, 1], [6, 5, 4], [8, 7, 6]]));

// array=[[1,2,3],[4,5,6],[7,8,9]]

// reverse_2D_array=array.map(row=>row.reverse()).reverse()

// reverse_2D_array=[[9,8,7],[6,5,4],[3,2,1]]
