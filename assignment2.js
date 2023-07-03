const findLargestNumber = (array) => {
    let largest = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
  
    return largest;
  };
  const numbers = [2, 7, 4, 1, 9, 5];
  const largestNumber = findLargestNumber(numbers);
  console.log(largestNumber); 
    