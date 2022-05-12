/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

INPUT AND OUTPUT
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

*/
const arr1 = [1, 3, 5, 7, 9, 11, 12]
const arr2 = [1, 2, 3, 4, 5, 10, 12]
/*
Psudocode
* Merge two sorted arrays in asc orders
* If arr 1 and arr 2 are empty , return zero
* remove duplicate values if exists.
*/

// function mergeArrays(arr1, arr2) {
//     let concantenate = arr1.concat(arr2)
//     for(let i = 0; i<concantenate.length; i++){
//       for (let j = 0; j<concantenate.length; j++){
//         if(i !== j){

//         }

//       }

//     }
//     return concantenate.sort((a, b) => a - b)
  
// }
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a,b)=>a-b)
}
console.log(mergeArrays(arr1, arr2))

/* 
* Used the array.concat()
* Used the array.sort() function
*/