/* 
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
All inputs will be valid.
*/

function last(x){
    /*  P ACCEPTS STRINGS
     * R returns a sorted array of string, sorted by the last letter in a each words
        if two words have same letter, should maintain the order they appeared in,
        the given string.
     *  E ("hello world") => [world, hello], ("i am a boy") => [a, i, am, boy]
     *  P *split string and convert to array.
        * sort last letter by charcode 
        * 
    */
      let toArray = x.split(' ').sort(function (a, b) {
        return a.charCodeAt(a.length -1) - b.charCodeAt(b.length - 1)   
      })

      return toArray
    
    }
    console.log(last('man i need a taxi up to ubud'))