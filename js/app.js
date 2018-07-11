'use strict';

alert('Hello!!! My name is Jason. You are about to guess who I am. Please answer all questions using Y or N or Yes or No');
var answerOne = prompt('Was I born in WA?').toUpperCase();
console.log('Was I born in WA?', answerOne);

if (answerOne === 'Y' || answerOne === 'YES') {
  alert('Wrong');
} else if (answerOne ==='N' || answerOne === 'NO') {
  alert('Correct');
} else {
  alert('Try inputing Y/N or YES/NO');
}

var answerTwo = prompt('Am I over 30 years old?').toUpperCase();
console.log('Am I over 30 years old?', answerTwo);

if (answerTwo === 'Y' || answerTwo === 'YES') {
  alert('Correct');
} else if (answerTwo ==='N' || answerTwo === 'NO') {
  alert('Wrong');
} else {
  alert('Try inputing Y/N or YES/NO');
}

var answerThree = prompt('Do I own a Ford?').toUpperCase();
console.log('Do I own a Ford?', answerThree);

if (answerThree === 'Y' || answerThree === 'YES') {
  alert('Definentaly incorrect');
} else if (answerThree ==='N' || answerThree === 'NO') {
  alert('Chevy all the way!!!');
} else {
  alert('Try inputing Y/N or YES/NO');
}

var answerFour = prompt('Do I own a banjo?').toUpperCase();
console.log('Do I own a banjo?', answerFour);

if (answerFour === 'Y' || answerFour === 'YES') {
  alert('Correct');
} else if (answerFour ==='N' || answerFour === 'NO') {
  alert('Wrong');
} else {
  alert('Try inputing Y/N or YES/NO');
}

var answerFive = prompt('Do I have any idea how to write code?').toUpperCase();
console.log('Do I have any idea how to write code?', answerFive);

if (answerFive === 'Y' || answerFive === 'YES') {
  alert('Thanks for the compliment but I am completely lost.');
} else if (answerFive ==='N' || answerFive === 'NO') {
  alert('Correct I am completely lost.');
} else {
  alert('Try inputing Y/N or YES/NO');
}
