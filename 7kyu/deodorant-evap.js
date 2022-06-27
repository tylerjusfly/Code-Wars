function evaporator(content, evap_per_day, threshold){ 
    //    testing the life of an evaporator containing a gas.
    //   P => content of Evaporator on ML, Percentage of gas lost everyday(evap_per_day)
    //   Threshold in % beyond which the evaporator no longe useful, all num are positive
    //   R => return (day) as an integer which evaporator will be out of use.
    //   E => evaporator(10, 10, 5) -> 29 days
    //   P => 
      let days = 0
      let thresholdInMl = content * (threshold/100)
      for (content; content > thresholdInMl; ){
        days++
        content = content - (content * (evap_per_day/100))
      }
      return days
    }

    console.log(evaporator(10,10,10)) //22