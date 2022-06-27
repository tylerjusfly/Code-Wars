/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/
function between(a, b) {
//   P  We are receiving integers(1,4)
//   R We are Returning the numbers and the numbers in btw
//   E (1, 6) => [1, 2, 3, 4, 5, 6]
//   P we get the differnece btw the number by subtracting
//   the bigger number has to come first so it doesn't return a negative
//   we loop through to the end and add 1 to each number looped
//   and push each number to an array
  
  let arraysOfNum = []
  let btw = b - a
  for(let i = 0; i <= btw; i++){
    let sum = a + i
    arraysOfNum.push(sum)
  }
  return arraysOfNum
}



console.log(between(1,4))
