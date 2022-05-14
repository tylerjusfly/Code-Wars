/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/
// Parameters - 2 Integers (a, b) where a is less than b
// Return - must return all numbers between the input .
/* Example 
  (1, 4) => {
    return [1, 2, 3, 4]
  }
  */
 let a = 1
 let b = 4

/* Psudocode
  create an empty array 
  loop through the array.
  add 1 to the initial value and push to the empty array
*/
function between(a, b) {
  // your code here
  let result = [];
  let end = b - a;
  
  for (let i = 0; i <= end; i++) {
  let sum = a + i;
  result.push(sum);
  }
  return result;
 
}



console.log(between(1,4))