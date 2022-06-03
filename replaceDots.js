/*
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
*/



var replaceDots = function(str) {
    // P - receiving strings with dots in between  "one.two.three"
    // R - returns back strings with hypen.
    // E - ("one.two.three") => ("one-two-three")
    // P - split stringd into an array and join back with hypen
      const find = str.split('.').join('-')
      
      console.log(find)
      return find
    }

    replaceDots("one.two.three")