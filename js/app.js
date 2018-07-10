alert('Please answer all questions using Y or N')
    var answerOne = prompt('Was I born in WA?');
    console.log('Was I born in WA?', answerOne);

    if (answerOne.toUpperCase() === 'Y') {
       alert('Wrong');
    } else if (answerOne.toUpperCase() ==='N') {
        alert('Correct');
    } 

    var answerTwo = prompt('Am I over 30 years old?');
    console.log('Am I over 30 years old?', answerTwo);

   if (answerTwo.toUpperCase() === 'Y') {
       alert('Correct');
    } else if (answerTwo.toUpperCase() ==='N') {
        alert('Wrong');
    } 

    var answerThree = prompt('Do I own a Ford?');
    console.log('Do I own a Ford?', answerThree);

    if (answerThree.toUpperCase() === 'Y') {
        alert('Definentaly incorrect');
     } else if (answerThree.toUpperCase() ==='N') {
         alert('Chevy all the way!!!');
    } 

    var answerFour = prompt('Do I own a banjo?');
    console.log('Do I own a banjo?', answerFour);

    if (answerFour.toUpperCase() === 'Y') {
        alert('Correct');
     } else if (answerFour.toUpperCase() ==='N') {
         alert('Wrong');
     }

    var answerFive = prompt('Do I have any idea how to write code?');
    console.log('Do I have any idea how to write code?', answerFive);

    if (answerFive.toUpperCase() === 'Y') {
        alert('Thanks for the compliment but I am completely lost.');
    } else if (answerFive.toUpperCase() ==='N') {
        alert('Correct I am completely lost.');        
};  

