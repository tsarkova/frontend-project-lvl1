import readlineSync from 'readline-sync';

let name = '';

export const userName = () => {
    name = readlineSync.question('May I have your name?');
    console.log('Hi ' + name + '!');
}

const random = () => {
    const min=0;
    const max=10;
    return Math.floor(min + Math.random() * (max + 1 - min));
}


const progression =  () => {
    let progressionArray = [];
    let i = random();
    let number2 = random();
    while (progressionArray.length < 11){
        i += number2;
        progressionArray.push(i); 
    }
    return progressionArray;
}



let index;
const arrayWithoutElement = (progressionArray) => {
    if (index !== -1) {
        progressionArray[index] = '..';
    }
    return progressionArray;
}



export const question = (counter = 0) => {
    let newProgressionArray = progression();
    let element = newProgressionArray[Math.floor(Math.random() * newProgressionArray.length)]; // случайный элемент массива
    index = newProgressionArray.indexOf(element);
    newProgressionArray = arrayWithoutElement(newProgressionArray);
    let stringOfNumbers = newProgressionArray.join(', ')
    let rightAnswer = element;
    console.log('Question:', stringOfNumbers)
    const answer = readlineSync.question('Your answer:');
if (answer != rightAnswer) {
    console.log(answer + ' is wrong answer ;(. Correct answer was ' + rightAnswer + '.');
}
if (answer == rightAnswer) {
    if (counter < 2) {
        console.log('Correct!')
        return question(counter+1);
    } else {
        console.log('Congratulations, ' + name + '!')
    }
}
}




