'use strict';

alert('Hello!!! My name is Jason. You are about to guess who I am. Please answer all questions using Y or N or Yes or No');

var score = 0;
console.log('Starting Score=0.', score);

var answerOne = prompt('Was I born in WA?').toUpperCase();
console.log('Was I born in WA?', answerOne);

if (answerOne === 'Y' || answerOne === 'YES') {
  alert('Wrong');
} else if (answerOne ==='N' || answerOne === 'NO') {
  alert('Correct');
  score++;
} else {
  alert('Try inputing Y/N or YES/NO');
}
console.log('answerOne=No', answerOne);
console.log('Total Possible Score = 1.', score);

var answerTwo = prompt('Am I over 30 years old?').toUpperCase();
console.log('Am I over 30 years old?', answerTwo);

if (answerTwo === 'Y' || answerTwo === 'YES') {
  alert('Correct');
  score++;
} else if (answerTwo ==='N' || answerTwo === 'NO') {
  alert('Wrong');
} else {
  alert('Try inputing Y/N or YES/NO');
}
console.log('answerTwo=Yes', answerTwo);
console.log('Total Possible Score = 2.', score);

var answerThree = prompt('Do I own a Ford?').toUpperCase();
console.log('Do I own a Ford?', answerThree);

if (answerThree === 'Y' || answerThree === 'YES') {
  alert('Definentaly incorrect');
} else if (answerThree ==='N' || answerThree === 'NO') {
  alert('Chevy all the way!!!');
  score++;
} else {
  alert('Try inputing Y/N or YES/NO');
}
console.log('answerThree=No', answerThree);
console.log('Total Possible Score = 3.', score);

var answerFour = prompt('Do I own a banjo?').toUpperCase();
console.log('Do I own a banjo?', answerFour);

if (answerFour === 'Y' || answerFour === 'YES') {
  alert('Correct');
  score++;
} else if (answerFour ==='N' || answerFour === 'NO') {
  alert('Wrong');
} else {
  alert('Try inputing Y/N or YES/NO');
}
console.log('answerFour=Yes', answerOne);
console.log('Total Possible Score = 4.', score);

var answerFive = prompt('Do I have any idea how to write code?').toUpperCase();
console.log('Do I have any idea how to write code?', answerFive);

if (answerFive === 'Y' || answerFive === 'YES') {
  alert('Thanks for the compliment but I am completely lost.');
} else if (answerFive ==='N' || answerFive === 'NO') {
  alert('Correct I am completely lost.');
  score++;
} else {
  alert('Try inputing Y/N or YES/NO');
}
console.log('answerFive=No', answerFive);
console.log('Total Possible Score = 5.', score);

alert('Congratulations your score is ' + score + ' out of 7.');