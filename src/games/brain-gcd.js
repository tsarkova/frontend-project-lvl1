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


const result = (number1, number2) => {
    return number1 ? result(number2 % number1, number1) : number2 ;
}

export const question = (counter = 0) => {
    const number1 = random();
    const number2 = random();
    console.log('Question:', number1, number2)
    const answer = readlineSync.question('Your answer:');
    const results = result(number1, number2);
if (answer != results) {
    console.log(answer + ' is wrong answer ;(. Correct answer was ' + results + '.');
}
if (answer == results) {
    if (counter < 2) {
        console.log('Correct!')
        return question(counter+1);
    } else {
        console.log('Congratulations, ' + name + '!')
    }
}
}