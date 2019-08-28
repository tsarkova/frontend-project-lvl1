import readlineSync from 'readline-sync';

let name = '';

export const userName = () => {
    name = readlineSync.question('May I have your name?');
    console.log('Hi ' + name + '!');
}


const random = () => {
    const min=0;
    const max=100;
    return Math.floor(min + Math.random() * (max + 1 - min));
}

const isEven = (number) => {
    return number % 2 === 0;
}

export const question = (counter = 0) => {
    const number = random();
    console.log('Question:', number)
    const ask = readlineSync.question('Your answer:');
    const even = isEven(number);
    const rightAnswer = isEven(number) ? 'yes' : 'no';
if ((ask != 'yes' && ask != 'no') || (ask === 'yes' && even === false) || (ask === 'no' && even === true)){
    console.log(ask + ' is wrong answer ;(. Correct answer was ' + rightAnswer + '.');
}
if ((ask === 'yes' && even === true) || (ask === 'no' && even === false)) {
    if (counter < 2) {
        console.log('Correct!')
        return question(counter+1);
    } else {
        console.log('Congratulations, ' + name + '!')
    }
   
}
}