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

const operation = () => {
    var sumbolArr = ['+', '-', '*'];
    var sumbol = sumbolArr[Math.floor(Math.random() * sumbolArr.length)];
    return sumbol;
}

const result = (number1, sumbol, number2) => {
 switch(sumbol) {
    case '+':
        return (number1+number2);
    case '-':
        return (number1-number2);
    case '*':
        return (number1*number2);
    default:
        return '';
 }
}

export const question = (counter = 0) => {
    const number1 = random();
    const number2 = random();
    const operationSumbol = operation();
    console.log('Question:', number1 + operationSumbol + number2)
    const answer = readlineSync.question('Your answer:');
    const results = result(number1, operationSumbol, number2);
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