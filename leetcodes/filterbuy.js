

// solution
function removeId(stockId, quantity){
    // Remove from array of id quantity
    let sets = []

    stockId = stockId.split(',')

    for(let i = 0; i < stockId.length; i++){

        if(sets.length !== quantity){
            sets.push(stockId[i])
        }
        
        // checking if stockId is not In  set array then return
    }
    const newStock = stockId.filter( id => sets.indexOf(id) == -1).join(',')
    const productBought = sets.join(',')

    return {productBought, newStock}

}



console.log(removeId("15,2320,344,3003,300044", 2))
console.log(removeId("ade,femi,ola,taye,bola", 1))
console.log(removeId("2,1,3,5,44", 5))
console.log(removeId("a,b,c,d,e,f,g,h,i,j,k,l,m,n", 10))
console.log(removeId("Ball, Goat, Cat, Elephant, Lion, Tiger, Camel", 7))
console.log(removeId("Aardvark,Aardwolf,Abyssinian,AchriopteraManga, Addax,Adelie,Penguin,Aesculapian snake,Affenpinscher,Afghan Hound,AfricanBullfrog,African Bush Elephant,African Civet,AfricanClawedFrog,African Forest Elephant,African Grey Parrot,African Palm Civet,AfricanPenguin,African Tree Toad,African Wild Dog,Agama Lizard,Aidi,Ainu,Airedale Terrier,Airedoodle,Akbash,Akita,Akita Shepherd,Alabai,AlaskanHusky,Alaskan Klee Kai,Alaskan Malamute,Alaskan Pollock,Alaskan Shepherd,Albacore Tuna,Albatross,Aldabra Giant Tortoise,Alligator,Alligator Gar,Alpaca,Alpine Dachsbracke,Alpine Goat,Alusky,Amargasaurus,Amazon Parrot,Amazon River Dolphin (Pink Dolphin),Ambrosia Beetle,American Alsatian,American Bulldog,American Cocker Spaniel,American Cockroach,Ame,Angora Goat,Anole Lizard,Ant", 26))