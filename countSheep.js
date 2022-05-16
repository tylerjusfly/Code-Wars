var countSheep = function (num){
  //P An Integer
  //R return a number with ...sheep concatenated concatenated together
  //E (2)=>"1 sheep...2 sheep... (0) => ''
  //P   check if the input is <= 0 if true , return ''
//  else loop through the number and pass sheep... to each iteration
//   then concatenate all together by pushing to an array
  let sheepArray = []
  if(num <= 0) return ''
  for(let i = 1; i<= num; i++){
    let sheepCount = `${i} sheep...`
//     console.log(sheepCount)
    sheepArray.push(sheepCount)
  }
  return sheepArray.join('')
//   console.log(sheepArray.join('...'))
}

// Test Cases
console.log(countSheep(5))
console.log(countSheep(0))