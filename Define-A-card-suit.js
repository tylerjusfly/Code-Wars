/* 
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

INPUT AND OUTPUT
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
  // good luck
  // getting the last value of the input
  let lastVal = card.charAt(card.length -1)
  switch (lastVal) {
    case '♠':
      return 'spades'
      break;
    case '♣' :
      return 'clubs'
      break;
    case '♦' :
      return 'diamonds'
      break;  
    default:
      return 'hearts'
      break;
  }
}
// favorite solution

function defineSuit(card) {
  if(card.includes('♥')) return 'hearts'
  if(card.includes('♦')) return 'diamonds'
  if(card.includes('♣')) return 'clubs'
  if(card.includes('♠')) return 'spades' 
  }

console.log(defineSuit('3♠'))