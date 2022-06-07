const list = [
    {
      firstName: 'Sofia',
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java'
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: 'Python'
    },
    {
      firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby'
    }
  ]


function greetDevelopers(list) {
    // P => Receiving a list of person
  //   R => returning the list and greeting
  /*  E => [{ firstName: 'Sofia',
              lastName: 'I.',
              country: 'Argentina', 
              continent: 'Americas', 
              age: 35, 
              language: 'Java' },]
              
              Expect => [ { firstName: 'Sofia', 
              lastName: 'I.', 
              country: 'Argentina', 
              continent: 'Americas', 
              age: 35, 
              language: 'Java',
      greeting: 'Hi Sofia, what do you like the most about Java?'
    }]
  */ 
  //   P => Map through list , for each list 
  //   return list and get the firstname key and language key to create 
  //   a new greeting key inside the object
    
    const map = list.map( dev => (
        { 
        ...dev,  
        greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`
    }))
    return map
  }



console.log(greetDevelopers(list))


