/**
 const numbers = [1, 3, 2, 3, 4, 1, 1, 3];
You are given an array of integers. Write a function to find the element that appears most frequently in the array. 
    If there are multiple elements with the same highest frequency, return any one of them.

    output
    1  // or 3, since both 1 and 3 appear 3 times

 */

    function findMostFrequentElement(numbers) {
        const obj = numbers.reduce((acc, curr)=> {
            if(!acc[curr]) {
                acc[curr] = 0
            } 
                acc[curr] += 1
            return acc
        }, {})
    
    let maxCount = 0;
    let mostFrequentElement;
    
    for (const key in obj) {
        if (obj[key] > maxCount) {
            maxCount = obj[key];
            mostFrequentElement = key;
        }
    }
       return mostFrequentElement
      }
    const numbers = [1, 3, 2, 3, 4, 1, 1, 3];
  const  mostFrequentElement  = findMostFrequentElement(numbers)
  console.log(mostFrequentElement)
    