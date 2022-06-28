// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
    // your code here
    let reversed = x.split('').reverse().join('').toLowerCase()
    
    return x.toLowerCase() === reversed) ? true : false
  }


//   TEST CASES
  console.log(isPalindrome("a"), true)
console.log(isPalindrome("aba"), true)
console.log(isPalindrome("Abba"), true)
console.log(isPalindrome("hello"), false)