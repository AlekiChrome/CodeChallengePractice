function giveMeMagic(sortedArr) {
    const endArray = sortedArr.length - 1;
    function findMagic(arr, minIndex, maxIndex) {
      const middleIndex = Math.ceil((minIndex + maxIndex) / 2);
      const middleValue = arr[middleIndex];
      
      if (middleValue === middleIndex) { return middleIndex; }
      if (minIndex > maxIndex) { return -1; }
      
      const maxIndexLeft = middleValue < middleIndex ? middleValue : middleIndex - 1;
      const left = findMagic(arr, 0, maxIndexLeft);
      
      if (left >= 0) { return left; }
  
      const minIndexRight = middleValue > middleIndex ? middleValue : middleIndex + 1;
      const right = findMagic(arr, minIndexRight, maxIndex);
     
      return right;
  
    }
    return findMagic(sortedArr, 0, endArray)
}
       
  console.log(giveMeMagic([-20,-10,2,10,20]));
  console.log(giveMeMagic([6, 5, 83, 5, 3, 18]));
