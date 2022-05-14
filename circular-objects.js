/* 
A circular object is any object containing a property that refers to itself. An example of a circular object can be found right here at Codewars - the very programming environment that they provide you with. Just try it - print the details of the current programming environment to the console (I will not be giving you any hints - you'll have to figure this out yourself) and scroll through the printed text until you find a property named global. As you would expect, the printed output would say that it is [circular]. Now let's try printing the global property of the programming environment to the console. What do you see? If you followed the instructions properly you would see the exact same thing being printed out! Impressed? You can test this further by then printing the global property of the global property of the current environment to the console and you would still see the exact same thing being printed. In fact, no matter how many levels you go "inside" the object, you would still see the exact same thing being printed out.
*/
// Define a circular object circular such that the following are true:
// circular.value === "Hello World"
// circular === circular.self
// circular.self === circular.self.self

// PREP
class Circular {
  constructor() {
    this.value = "Hello World";
    this.self = this;
  }
}

let circular = new Circular();
let selff = circular.self
console.log(selff.self)

