//Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers. 


function divCon(x){
    let stringType = []
    let intType = []
    for(let i =0; i<x.length; i++){
      if(typeof x[i] == 'string'){
        stringType.push(x[i])
      }
      else if(typeof x[i] == "number"){
        intType.push(x[i])
      }
    }
    const strAddup = stringType.reduce((acc, cval) => {
      return parseInt(acc) + parseInt(cval)
    },0)
    const intAddup = intType.reduce((acc, cval) => {
      return acc + cval
    }, 0)
    
    return intAddup - strAddup
    
  }


//   function divCon(x){
//     let numValue = 0;
//     let strValue = 0;
    
//     for(let i = 0; i < x.length; i++) {
//       if(typeof(x[i]) === 'string' ) {
//         strValue += parseFloat(x[i]);
//       } else if(typeof(x[i]) === 'number' ) {
//         numValue += x[i];
//       }
//     }
//     return numValue - strValue;
//   }


  //TESTCASES--
console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);