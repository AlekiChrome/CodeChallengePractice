// * Create a function that takes a code of chess board square and return his color.

// ? Information:
// ? Chess board has four sides
// ? All sides are equal
// ? Each side has a perimeter of 8 squares
// ? Two sides are numbered 1 - 8
// ? Two sides are lettered a - h
// ? Even numbers take over the white squares
// ? Odd numbers take over the black squares

const chessBoard = pole => {
    let board = 86;
 
    for (let i = 1; i < board; i++) {
       if (i % 2 === 0) {
          return 'white';
       } else if ( i % 2 !== 0) {
          return 'black';
       }
    }
 
 }
 console.log(chessBoard('a1'));
 console.log(chessBoard('e5'));
 console.log(chessBoard('d1'));