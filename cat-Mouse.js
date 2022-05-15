/* 
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

*/
/*
PREP
Parameter = receives a string (C....m)
Returns = 
Psudocode = check the index of each letter in the string and retun escaped if the space/index btw them is more than 3.
Index starts from zero, so you have to deduct 1 before doing an if else check.
*/
function catMouse(x){

  return x.indexOf('m') - x.indexOf('C') - 1 > 3 ? 'Escaped!' : 'Caught!';
}

// Test Cases
console.log(catMouse('C...m'))
console.log(catMouse('C.....m'))