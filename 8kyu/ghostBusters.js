/*
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

ghostBusters("Sky scra per");

Should return:

"Skyscraper"

If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"

*/

function ghostBusters(building) {
    //   P => receives strings with white spaces or no white spaces
    //   R => if string contains white spaces join them together , else return string if it dosent contain whitespaces
    //   E => ("T HE -G REAT EST") => ("THE-GREATEST")
    //   P => check if a whitespace exits then split through and join.
    //   sol2 = use a for of loop
      return building.indexOf(' ') != -1 ? building.split(' ').join('') : "You just wanted my autograph didn't you?"
    
    }

    // TEST CASES

    console.log(ghostBusters("T HE -G REAT EST"))
    console.log(ghostBusters("BusStation"))