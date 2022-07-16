/* Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
*/

"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
//   flateen the array with array.flat function
//   and return a sorted function
  array = array.flat()
  let sortedArr = array.sort((a, b) =>{
     return a -b
  })
  return sortedArr;
}

// TEST Cases

flattenAndSort([[], [], [], [2], [], [1]], [1, 2]),
flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]], [1, 2, 3, 4, 5, 6, 100]),
flattenAndSort([[111, 999], [222], [333], [444], [888], [777], [666], [555]], [111, 222, 333, 444, 555, 666, 777, 888, 999])