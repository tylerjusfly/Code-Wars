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

/* ===== Jacob Asper code

Pseudo = if value of nums[i] is the obj hash map is undefined, 
add or set the key to nums[i] with a value of anything/true =>  obj[nums[i]] = true
else if the value is not equals undefined , return true 

const containsDuplicate = function (nums) {
	const obj = {}
	for (let i = 0; i < nums.length; i++) {
		// if the number does not exist in the array, define it (the value is arbitrary, but I chose "whatever you want" here—anything that isn't undefined should work
		if (obj[nums[i]] === undefined) {
			obj[nums[i]] = "whatever you want"
		}
		// else if the key already exists in the hashmap, return true
		else {
			return true
		}
	}
	//return false if no duplicates are found
	return false
};


*/