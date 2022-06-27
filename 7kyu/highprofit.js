/*
Story

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
Task

Write a function that returns both the minimum and maximum number of the given list/array.
Examples(Input --> Output)

[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5, 2334454]
[1]         --> [1, 1]

Remarks

All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

*/



function minMax(arr){
    //   P => receiving arrays of number
    //   R => returning the minimum and maximum of the array
    //   E => [1,2,3,4] => [1,4]
    //   P => checking the array if for each number looped is < the currnet num
    //   if true set lower num to an array , 
    //   then you check if the first num is ?> than all num in the array
      let low = Math.min(...arr)
      let high = Math.max(...arr)
      return [low, high]
      
    }