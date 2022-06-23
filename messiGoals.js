/*
omplete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17

*/


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
  //   P => receive integers
  //   R => returns a sum of all integers
  //   psuedocode
  // actually thinking of using reduce, by putting them all in an array
  //   cause a simple solution would be to just sum all together
    //return laLigaGoals + copaDelReyGoals + championsLeagueGoals
    let goalsArray = [laLigaGoals, copaDelReyGoals, championsLeagueGoals]
    let addup = goalsArray.reduce((acc, cval) => {return acc + cval},0)
    return addup 
  }

//   Test Cases
console.log(goals(0,0,0))
console.log(goals(43, 10, 5))