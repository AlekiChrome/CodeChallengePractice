// ? To find the volume (centimeters cubed) of a cuboid you use the formula: volume = length * width * height

// * Someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
// * Find out whether the cuboid has equal sides (= is a cube).


// TODO: Return true if the cuboid could have equal sides, return false otherwise.
// TODO: Return false for invlaid numbers too  (e.g volume or side is less than or equal to 0).

const cubeChecker = ( volume, side ) => {
  return ( volume === side ** 3 && volume > 0 ) ? true : false;
}
console.log(cubeChecker(56.3, 1));
