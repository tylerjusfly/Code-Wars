/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

function fakeBin(x){
    // P - receiving a string of digits, input will never be empty
    // R - returns 0 if digit is less than 5, return 1 if digit is greater than 5
    // E - (2,1,,6,5,0) => (0,0,1,1,0)
    // P -> we will turn string into an array , and map through it, 
    // then check if each digit >  or < than 5 
    //  if true or false change it to 0 or 1

    // let m = x.split('').map(xx =>{
    //   if (xx < 5){
    //      xx = 0
    //   }
    //   else{ xx = 1}
    //   return xx
    // })
    // return m.join('')

    // Codewars mode!!
    return x.split('').map(xx => xx < 5 ? xx = 0 : xx = 1).join('')
  
  }

  const string = '45385593107843568'

  console.log(fakeBin(string))