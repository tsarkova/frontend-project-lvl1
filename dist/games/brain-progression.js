"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.question = exports.userName = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let name = '';

const userName = () => {
  name = _readlineSync.default.question('May I have your name?');
  console.log('Hi ' + name + '!');
};

exports.userName = userName;

const random = () => {
  const min = 0;
  const max = 10;
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const progression = () => {
  let progressionArray = [];
  let i = random();
  let number2 = random();

  while (progressionArray.length < 11) {
    i += number2;
    progressionArray.push(i);
  }

  return progressionArray;
};

let index;

const arrayWithoutElement = progressionArray => {
  if (index !== -1) {
    progressionArray[index] = '..';
  }

  return progressionArray;
};

const question = (counter = 0) => {
  let newProgressionArray = progression();
  let element = newProgressionArray[Math.floor(Math.random() * newProgressionArray.length)]; // случайный элемент массива

  index = newProgressionArray.indexOf(element);
  newProgressionArray = arrayWithoutElement(newProgressionArray);
  let stringOfNumbers = newProgressionArray.join(', ');
  let rightAnswer = element;
  console.log('Question:', stringOfNumbers);

  const answer = _readlineSync.default.question('Your answer:');

  if (answer != rightAnswer) {
    console.log(answer + ' is wrong answer ;(. Correct answer was ' + rightAnswer + '.');
  }

  if (answer == rightAnswer) {
    if (counter < 2) {
      console.log('Correct!');
      return question(counter + 1);
    } else {
      console.log('Congratulations, ' + name + '!');
    }
  }
};

exports.question = question;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1wcm9ncmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJuYW1lIiwidXNlck5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJwcm9ncmVzc2lvbiIsInByb2dyZXNzaW9uQXJyYXkiLCJpIiwibnVtYmVyMiIsImxlbmd0aCIsInB1c2giLCJpbmRleCIsImFycmF5V2l0aG91dEVsZW1lbnQiLCJjb3VudGVyIiwibmV3UHJvZ3Jlc3Npb25BcnJheSIsImVsZW1lbnQiLCJpbmRleE9mIiwic3RyaW5nT2ZOdW1iZXJzIiwiam9pbiIsInJpZ2h0QW5zd2VyIiwiYW5zd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFJQSxJQUFJLEdBQUcsRUFBWDs7QUFFTyxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUMxQkQsRUFBQUEsSUFBSSxHQUFHRSxzQkFBYUMsUUFBYixDQUFzQix1QkFBdEIsQ0FBUDtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFRTCxJQUFSLEdBQWUsR0FBM0I7QUFDSCxDQUhNOzs7O0FBS1AsTUFBTU0sTUFBTSxHQUFHLE1BQU07QUFDakIsUUFBTUMsR0FBRyxHQUFDLENBQVY7QUFDQSxRQUFNQyxHQUFHLEdBQUMsRUFBVjtBQUNBLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxHQUFHLEdBQUdFLElBQUksQ0FBQ0gsTUFBTCxNQUFpQkUsR0FBRyxHQUFHLENBQU4sR0FBVUQsR0FBM0IsQ0FBakIsQ0FBUDtBQUNILENBSkQ7O0FBT0EsTUFBTUksV0FBVyxHQUFJLE1BQU07QUFDdkIsTUFBSUMsZ0JBQWdCLEdBQUcsRUFBdkI7QUFDQSxNQUFJQyxDQUFDLEdBQUdQLE1BQU0sRUFBZDtBQUNBLE1BQUlRLE9BQU8sR0FBR1IsTUFBTSxFQUFwQjs7QUFDQSxTQUFPTSxnQkFBZ0IsQ0FBQ0csTUFBakIsR0FBMEIsRUFBakMsRUFBb0M7QUFDaENGLElBQUFBLENBQUMsSUFBSUMsT0FBTDtBQUNBRixJQUFBQSxnQkFBZ0IsQ0FBQ0ksSUFBakIsQ0FBc0JILENBQXRCO0FBQ0g7O0FBQ0QsU0FBT0QsZ0JBQVA7QUFDSCxDQVREOztBQWFBLElBQUlLLEtBQUo7O0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUlOLGdCQUFELElBQXNCO0FBQzlDLE1BQUlLLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDZEwsSUFBQUEsZ0JBQWdCLENBQUNLLEtBQUQsQ0FBaEIsR0FBMEIsSUFBMUI7QUFDSDs7QUFDRCxTQUFPTCxnQkFBUDtBQUNILENBTEQ7O0FBU08sTUFBTVQsUUFBUSxHQUFHLENBQUNnQixPQUFPLEdBQUcsQ0FBWCxLQUFpQjtBQUNyQyxNQUFJQyxtQkFBbUIsR0FBR1QsV0FBVyxFQUFyQztBQUNBLE1BQUlVLE9BQU8sR0FBR0QsbUJBQW1CLENBQUNYLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNILE1BQUwsS0FBZ0JjLG1CQUFtQixDQUFDTCxNQUEvQyxDQUFELENBQWpDLENBRnFDLENBRXNEOztBQUMzRkUsRUFBQUEsS0FBSyxHQUFHRyxtQkFBbUIsQ0FBQ0UsT0FBcEIsQ0FBNEJELE9BQTVCLENBQVI7QUFDQUQsRUFBQUEsbUJBQW1CLEdBQUdGLG1CQUFtQixDQUFDRSxtQkFBRCxDQUF6QztBQUNBLE1BQUlHLGVBQWUsR0FBR0gsbUJBQW1CLENBQUNJLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0EsTUFBSUMsV0FBVyxHQUFHSixPQUFsQjtBQUNBakIsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QmtCLGVBQXpCOztBQUNBLFFBQU1HLE1BQU0sR0FBR3hCLHNCQUFhQyxRQUFiLENBQXNCLGNBQXRCLENBQWY7O0FBQ0osTUFBSXVCLE1BQU0sSUFBSUQsV0FBZCxFQUEyQjtBQUN2QnJCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcUIsTUFBTSxHQUFHLDBDQUFULEdBQXNERCxXQUF0RCxHQUFvRSxHQUFoRjtBQUNIOztBQUNELE1BQUlDLE1BQU0sSUFBSUQsV0FBZCxFQUEyQjtBQUN2QixRQUFJTixPQUFPLEdBQUcsQ0FBZCxFQUFpQjtBQUNiZixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsYUFBT0YsUUFBUSxDQUFDZ0IsT0FBTyxHQUFDLENBQVQsQ0FBZjtBQUNILEtBSEQsTUFHTztBQUNIZixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBc0JMLElBQXRCLEdBQTZCLEdBQXpDO0FBQ0g7QUFDSjtBQUNBLENBcEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxubGV0IG5hbWUgPSAnJztcblxuZXhwb3J0IGNvbnN0IHVzZXJOYW1lID0gKCkgPT4ge1xuICAgIG5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPycpO1xuICAgIGNvbnNvbGUubG9nKCdIaSAnICsgbmFtZSArICchJyk7XG59XG5cbmNvbnN0IHJhbmRvbSA9ICgpID0+IHtcbiAgICBjb25zdCBtaW49MDtcbiAgICBjb25zdCBtYXg9MTA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKSk7XG59XG5cblxuY29uc3QgcHJvZ3Jlc3Npb24gPSAgKCkgPT4ge1xuICAgIGxldCBwcm9ncmVzc2lvbkFycmF5ID0gW107XG4gICAgbGV0IGkgPSByYW5kb20oKTtcbiAgICBsZXQgbnVtYmVyMiA9IHJhbmRvbSgpO1xuICAgIHdoaWxlIChwcm9ncmVzc2lvbkFycmF5Lmxlbmd0aCA8IDExKXtcbiAgICAgICAgaSArPSBudW1iZXIyO1xuICAgICAgICBwcm9ncmVzc2lvbkFycmF5LnB1c2goaSk7IFxuICAgIH1cbiAgICByZXR1cm4gcHJvZ3Jlc3Npb25BcnJheTtcbn1cblxuXG5cbmxldCBpbmRleDtcbmNvbnN0IGFycmF5V2l0aG91dEVsZW1lbnQgPSAocHJvZ3Jlc3Npb25BcnJheSkgPT4ge1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcHJvZ3Jlc3Npb25BcnJheVtpbmRleF0gPSAnLi4nO1xuICAgIH1cbiAgICByZXR1cm4gcHJvZ3Jlc3Npb25BcnJheTtcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBxdWVzdGlvbiA9IChjb3VudGVyID0gMCkgPT4ge1xuICAgIGxldCBuZXdQcm9ncmVzc2lvbkFycmF5ID0gcHJvZ3Jlc3Npb24oKTtcbiAgICBsZXQgZWxlbWVudCA9IG5ld1Byb2dyZXNzaW9uQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3UHJvZ3Jlc3Npb25BcnJheS5sZW5ndGgpXTsgLy8g0YHQu9GD0YfQsNC50L3Ri9C5INGN0LvQtdC80LXQvdGCINC80LDRgdGB0LjQstCwXG4gICAgaW5kZXggPSBuZXdQcm9ncmVzc2lvbkFycmF5LmluZGV4T2YoZWxlbWVudCk7XG4gICAgbmV3UHJvZ3Jlc3Npb25BcnJheSA9IGFycmF5V2l0aG91dEVsZW1lbnQobmV3UHJvZ3Jlc3Npb25BcnJheSk7XG4gICAgbGV0IHN0cmluZ09mTnVtYmVycyA9IG5ld1Byb2dyZXNzaW9uQXJyYXkuam9pbignLCAnKVxuICAgIGxldCByaWdodEFuc3dlciA9IGVsZW1lbnQ7XG4gICAgY29uc29sZS5sb2coJ1F1ZXN0aW9uOicsIHN0cmluZ09mTnVtYmVycylcbiAgICBjb25zdCBhbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOicpO1xuaWYgKGFuc3dlciAhPSByaWdodEFuc3dlcikge1xuICAgIGNvbnNvbGUubG9nKGFuc3dlciArICcgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgJyArIHJpZ2h0QW5zd2VyICsgJy4nKTtcbn1cbmlmIChhbnN3ZXIgPT0gcmlnaHRBbnN3ZXIpIHtcbiAgICBpZiAoY291bnRlciA8IDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJylcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uKGNvdW50ZXIrMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmdyYXR1bGF0aW9ucywgJyArIG5hbWUgKyAnIScpXG4gICAgfVxufVxufVxuXG5cblxuXG4iXX0=