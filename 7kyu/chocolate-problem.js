/*
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

*/

function breakChocolate(n,m) {
    //   P => 1 x 1
    //   R => return numbers of chocolate breaks
    //   E => (5, 5) => 24
    //   P if m * n == 0 return 0
    //   else multiply m * n and deduct 1 which is the last unbreakable part
      return m * n == 0 ? 0 : (m * n) - 1
      
    }

    // Test Cases
    console.log(breakChocolate(5, 5) , 24)
    
    console.log(breakChocolate(1, 1) , 0)