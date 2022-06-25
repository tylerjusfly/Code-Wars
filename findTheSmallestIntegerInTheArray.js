
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2

/*
Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/
class SmallestIntegerFinder {
    findSmallestInt(args) {
  /*
      Compare the first two elements of the array.
      If the first element is greater than the second swap them.
      Then, compare 2nd and 3rd elements if the second element is greater than the 3rd swap them.
      Repeat this till the end of the array.
  */
      return Math.min(...args)
    }
  }

  //TESTCASES--
const findSmall = new SmallestIntegerFinder()
console.log(findSmall.findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
console.log(findSmall.findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
console.log(findSmall.findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
console.log(findSmall.findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
console.log(findSmall.findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1')