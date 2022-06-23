/*
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task

Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015") === false
*/


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    //   P => receiving strings and date
    //   R => we will be returning true if code and date == or > than
    //   E =>
    //   P => we check with an if statement if (enteredCode == correctCode) &&
    //   current date < exipiration day
      const validDate = new Date(currentDate) > new Date(expirationDate)
      if(enteredCode === correctCode && validDate === false ){
        return true
      }
      return false
      //console.log(validDate)
    //   codewars mode
     // return enteredCode === correctCode && validDate === false ? true : false
     
      
    }

    // TEST CASES
console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015") ) //true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')) //false
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")) //false