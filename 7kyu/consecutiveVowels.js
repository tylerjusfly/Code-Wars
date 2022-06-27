/*
Consecutive Vowels

You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from "a". Keep in mind that the consecutive vowel to "u" is "a" and the cycle continues.

Return an integer with the length of the consecutive vowels found.

This is better explained with a couple of examples:

    You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the "a" and make your way right. The next vowel is an "e" and it is the consecutive vowel, then "i" and so forth until you get to "u". If you keep moving right you find "a" which happens to be the consecutive vowel. Return 6.
    This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the "a", then ignore the rest until you get to the "e", which is the consecutive vowel and so forth until you get to the "o". Return 4.

Note

For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. y is not considered a vowel in this kata.

Good luck!
Strings
*/

function getTheVowels(string) {
    // P => ramdom strings (lowercase)
    // R => returning a length of consecutive or vowels that folllows each other
    // E => (raidme) => (2)
    // P => create an array of vowels, split the parameters received into an array. also set a count to keep track of how many vowels found
    //  we then iterate through the array, check if the iterated value is equals to the first index in the array of vowels. 
    // if true , increase count, and remove the index off and run func again , till all iterated value has been checked

    // specifying array of vowels
    let arrayOfVowels = ['a','e','i','o','u'];
    let count = 0;
    // turning string received to an array

    let arrayOfLetters = string.split('');

    //Iterrate Through
    for(let i = 0; i < arrayOfLetters.length; i++){
        //checking if found the first index in the array of letters looped
        if(arrayOfVowels[0] == arrayOfLetters[i]){
            count ++    //increase Count
            arrayOfVowels.shift() // remove the first index
        }
        if(arrayOfVowels.length == 0){
            // Reset the array of vowels
            arrayOfVowels = ['a','e','i','o','u'];
        }
    }
    
    return count
}


// function getTheVowels(string) {

//     // specifying array of vowels
//     let arrayOfVowels = ['a','e','i','o','u'];
//     let count = 0;
//     // turning string received to an array
//     let arrayOfLetters = string.split('');
  
//     // A more Cleaner way
//     for(let index in arrayOfLetters){
//         if(arrayOfVowels[0] == arrayOfLetters[index]){
//             count ++
//             arrayOfVowels.shift()
//         }
//         if(arrayOfVowels.length == 0){
//             arrayOfVowels =  ['a','e','i','o','u'];
//        }

//     }
//     return count
// }

   // const s = 'akfheujfkgiaaaofmmfkdfuaiiie';
    const s = 'raidme'

    console.log(getTheVowels(s))