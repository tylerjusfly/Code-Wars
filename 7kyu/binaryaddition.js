/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary 
    */


    function addBinary(a,b) {
        //   add number up first, get the decimal value and convert to binary.
          let decimal = a + b
          
          return decimal.toString(2)
        
        }

        // test Cases
        console.log(addBinary(1,2));
        console.log(addBinary(5,5));
        console.log(addBinary(1,3));
        console.log(addBinary(1,1));
