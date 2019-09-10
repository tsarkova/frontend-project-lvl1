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


const result = (number) => {
    return (smallestDivisor(number) == number) ? 'yes' : 'no';
}

const smallestDivisor = (num) => {
  if (num === 1) {
    return 1; 
  }
    const iter = (counter, num) => {
      if ((num % counter) === 0) {
        return counter;
      } else {
          return iter(counter +=1, num);
    }
  }
  return iter(2, num);
};


export const question = (counter = 0) => {
    const number = random();
    console.log('Question:', number)
    const answer = readlineSync.question('Your answer:');
    const results = result(number);
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







