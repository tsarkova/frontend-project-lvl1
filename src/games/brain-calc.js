import { random } from '../modules/random';
import engine from './engine';


const result = () => {
  const number1 = random();
  const number2 = random();
  const sumbolArr = ['+', '-', '*'];
  const sumbol = sumbolArr[Math.floor(Math.random() * sumbolArr.length)];
  const question = `${number1} ${sumbol} ${number2}`;
  switch (sumbol) {
    case '+':
      return { question, answer: number1 + number2 };
    case '-':
      return { question, answer: number1 - number2 };
    case '*':
      return { question, answer: number1 * number2 };
    default:
      return '';
  }
};

const questionText = 'Find the greatest common divisor of given numbers.';

export default () => engine(result, questionText);
