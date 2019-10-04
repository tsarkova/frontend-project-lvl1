import readlineSync from 'readline-sync';

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name}!`);
  return name;
};

export default (result, questionText) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(questionText);

  const iter = (counter) => {
    const dich = result();
    console.log('Question: ', dich.question);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
    if (userAnswer !== dich.answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${dich.answer}.`);
    }
    if (userAnswer === dich.answer) {
      if (counter < 2) {
        console.log('Correct!');
        return iter(counter + 1);
      }
      console.log(`Congratulations, ${userName}!`);
    }
  };
  return iter(0);
};
