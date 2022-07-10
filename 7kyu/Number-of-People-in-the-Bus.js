
//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function(busStops){
    // Good Luck!
    //console.log(busStops)
  //   Receiving a list of array.
  //   elements of each pair represent (first item)=>num of people getting into bus
  //   (second item)=> num of people getting out of bus
  //   R=> return num of people who still in bus after last array
  //   P => add up all num of index 0 , add all num of index 1
  //   deduct all num of index 1 from 0
    let idxzero = busStops.map((val, idx)=> {
      return val[0]
    })
    idxzero = idxzero.reduce((acc, val)=>{
        return acc + val
      },0)
    
  //   adding up idx 1
    let idxone = busStops.map((val, idx)=> {
      return val[1]
    })
    idxone = idxone.reduce((acc, val)=>{
        return acc + val
      },0)
    return idxzero - idxone
  }

//   favorite Solution from a favortie code warriors
//const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)