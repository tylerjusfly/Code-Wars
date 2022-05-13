/* 
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
Assumptions

    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.

*/
// My thouhghts
// One seeing the problem , using reduce just popped in my head


// Sum Numbers
function sum (numbers) {
  "use strict";
  const sums = numbers.reduce((acc, cval) =>{
    return acc + cval
  },0)

  return sums
  
};

// Test cases
const testArr = [1, 5.2, 4, 0, -1]
const testArr2 = [-2.398]
const testArr3 = [0]
console.log(sum(testArr))