/*
Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/


function sayHello( name, city, state ) {
    //   P => Receives an array of names and city , state in string
    //   R => Returns a string with the names in the array and the cith and state
    //   E => (['John', 'Smith'], 'Phoenix', 'Arizona') => 
    //   (Hello, John Smith! Welcome to Phoenix, Arizona!)
    //   P => Join the name in the array with white spaces 
    //   turn the city and state to an array , pick by index and plug it into the sentence
      return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
    }