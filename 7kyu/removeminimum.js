// https://www.codewars.com/kata/563cf89eb4747c5fb100001b


function removeSmallest(numbers) {
    //   Return an empty list if empty
    //   given an array , return the smallest value
      //throw "TODO: removeSmallest";
    //   first check if array is empty , return back empty array
    // else if array is > 0 
      if(numbers.length == 0){
        return []
      }
      else{
        // get a copy
        let copy = [...numbers]
        let low = Math.min(...numbers)
        
        let index = numbers.indexOf(low)
        copy.splice(index, 1)
        return copy
      }
    }



let numbers = [ 225, 150, 124, 399, 300, 124]
// [ 225, 150, 399, 300 ] 

console.log(removeSmallest(numbers))