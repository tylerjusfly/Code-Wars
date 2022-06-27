/*
* Write a function to split a string and convert it into an array of words.
* PREP
* Parameters = takes a string, no numbers, no booleans, everything will be in a string
* Return = an array
* Examples = 
* "Robin Singh" ==> ["Robin", "Singh"]
* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
* Psudocode = 
*/

function stringToArray(string){
  return string.split(' ')

}

let ex = "I love arrays they are my favorite"
let ex2 = ("Robin Singh")

console.log(stringToArray(ex))
console.log(stringToArray(ex2))
