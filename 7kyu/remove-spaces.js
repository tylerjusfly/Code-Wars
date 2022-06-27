// Simple, remove the spaces from the string, then return the resultant string.
// PREP
/*
Parameters = Strings
Return = Join the strings together.
Example = ade here = adehere
Psudocode = 
Receive a string and Join it together 
using split to turn to array and join
*/

function noSpace(x){
  return x.split(' ').join('')

}

let names = noSpace('ade o la')
// console.log(names.indexOf(' '))
console.log(names)