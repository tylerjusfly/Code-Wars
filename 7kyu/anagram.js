/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"


*/
   const isAnagram = (test, original) => test.toLowerCase().split('').sort().join() === original.toLowerCase().split('').sort().join();

// write the function isAnagram
// var isAnagram = function(test, original) {
//     if (test.length !== original.length) {
//           return false
//       }
//   //   check if all values in test exists in original
//     test = test.toLowerCase().split('')
//     original = original.toLowerCase().split('')
//     let res = test.every(cv => original.includes(cv))
  
//     return res
    
//   };


// TEST CASES
console.log(isAnagram('apple', 'pale')) //false
console.log(isAnagram('dumble', 'bumble')) //false
console.log(isAnagram('Twoo', 'WooT')) //true