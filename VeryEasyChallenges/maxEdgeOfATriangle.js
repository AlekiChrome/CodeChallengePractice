// * Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers

// TODO: Add two sides of the traiangle and subtract the third. i.e. ( side1 + side2 ) - 1

const nextEdge = ( side1, side2 ) => {
    const maxRange = ( side1 + side2 ) - 1

    return maxRange;
}

console.log(nextEdge(8, 10))

console.log(nextEdge(5, 7))

console.log(nextEdge(9, 2))
