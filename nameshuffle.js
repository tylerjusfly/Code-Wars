/*
Write a function that returns a string in which firstname is swapped with last name.

Examples
"john McClane" --> "McClane john"
*/

function nameShuffler(str){
    //Shuffle It
  //   P - Receiving a string 
  //   R - Returning a shuffled string
  //   E - ('hello world') => ('world hello')
  //   P - turn string into and array and reverse.
    
    return str.split(' ').reverse().join(' ')
  }

//   Test Cases
console.log(nameShuffler('hello world'))
console.log(nameShuffler("john McClane"))