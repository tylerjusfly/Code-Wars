/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109


*/



const containsDuplicate = function(nums) {
//     //     P - receivimg an array of numbers
// //     R - returning a boolean if multiple numbers exist in the array
// //     E - [1,1,4,5] => true [1,4,3,6] => false
// //     P - loop through  

        let set = new Set();
        let i = 0;
        while(i < nums.length){
            if(set.has(nums[i])) return true;
            set.add(nums[i]);
            i++;
        }
        return false;

//     let sortedArray = nums.sort()
//     for(var i=0; i <sortedArray.length; i++){
//         if(sortedArray[i] == sortedArray[i+1]){
//         return true
//     }
//         return false 
// };    
// //return sortedArray
};

const num1 = [1,5,3,2]
const num2 = [1,4,2,1]
const num3 = [2,14,18,22,22]

console.log(containsDuplicate(num3))