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
  const max = 100;
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const result = (number1, number2) => {
  return number1 ? result(number2 % number1, number1) : number2;
};

const question = (counter = 0) => {
  const number1 = random();
  const number2 = random();
  console.log('Question:', number1, number2);

  const answer = _readlineSync.default.question('Your answer:');

  const results = result(number1, number2);

  if (answer != results) {
    console.log(answer + ' is wrong answer ;(. Correct answer was ' + results + '.');
  }

  if (answer == results) {
    if (counter < 2) {
      console.log('Correct!');
      return question(counter + 1);
    } else {
      console.log('Congratulations, ' + name + '!');
    }
  }
};

exports.question = question;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1nY2QuanMiXSwibmFtZXMiOlsibmFtZSIsInVzZXJOYW1lIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iLCJjb25zb2xlIiwibG9nIiwicmFuZG9tIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmVzdWx0IiwibnVtYmVyMSIsIm51bWJlcjIiLCJjb3VudGVyIiwiYW5zd2VyIiwicmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBSUEsSUFBSSxHQUFHLEVBQVg7O0FBRU8sTUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDMUJELEVBQUFBLElBQUksR0FBR0Usc0JBQWFDLFFBQWIsQ0FBc0IsdUJBQXRCLENBQVA7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBUUwsSUFBUixHQUFlLEdBQTNCO0FBQ0gsQ0FITTs7OztBQU1QLE1BQU1NLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFFBQU1DLEdBQUcsR0FBQyxDQUFWO0FBQ0EsUUFBTUMsR0FBRyxHQUFDLEdBQVY7QUFDQSxTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBRyxHQUFHRSxJQUFJLENBQUNILE1BQUwsTUFBaUJFLEdBQUcsR0FBRyxDQUFOLEdBQVVELEdBQTNCLENBQWpCLENBQVA7QUFDSCxDQUpEOztBQU9BLE1BQU1JLE1BQU0sR0FBRyxDQUFDQyxPQUFELEVBQVVDLE9BQVYsS0FBc0I7QUFDakMsU0FBT0QsT0FBTyxHQUFHRCxNQUFNLENBQUNFLE9BQU8sR0FBR0QsT0FBWCxFQUFvQkEsT0FBcEIsQ0FBVCxHQUF3Q0MsT0FBdEQ7QUFDSCxDQUZEOztBQUlPLE1BQU1WLFFBQVEsR0FBRyxDQUFDVyxPQUFPLEdBQUcsQ0FBWCxLQUFpQjtBQUNyQyxRQUFNRixPQUFPLEdBQUdOLE1BQU0sRUFBdEI7QUFDQSxRQUFNTyxPQUFPLEdBQUdQLE1BQU0sRUFBdEI7QUFDQUYsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5Qk8sT0FBekIsRUFBa0NDLE9BQWxDOztBQUNBLFFBQU1FLE1BQU0sR0FBR2Isc0JBQWFDLFFBQWIsQ0FBc0IsY0FBdEIsQ0FBZjs7QUFDQSxRQUFNYSxPQUFPLEdBQUdMLE1BQU0sQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLENBQXRCOztBQUNKLE1BQUlFLE1BQU0sSUFBSUMsT0FBZCxFQUF1QjtBQUNuQlosSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlVLE1BQU0sR0FBRywwQ0FBVCxHQUFzREMsT0FBdEQsR0FBZ0UsR0FBNUU7QUFDSDs7QUFDRCxNQUFJRCxNQUFNLElBQUlDLE9BQWQsRUFBdUI7QUFDbkIsUUFBSUYsT0FBTyxHQUFHLENBQWQsRUFBaUI7QUFDYlYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLGFBQU9GLFFBQVEsQ0FBQ1csT0FBTyxHQUFDLENBQVQsQ0FBZjtBQUNILEtBSEQsTUFHTztBQUNIVixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBc0JMLElBQXRCLEdBQTZCLEdBQXpDO0FBQ0g7QUFDSjtBQUNBLENBakJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxubGV0IG5hbWUgPSAnJztcblxuZXhwb3J0IGNvbnN0IHVzZXJOYW1lID0gKCkgPT4ge1xuICAgIG5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPycpO1xuICAgIGNvbnNvbGUubG9nKCdIaSAnICsgbmFtZSArICchJyk7XG59XG5cblxuY29uc3QgcmFuZG9tID0gKCkgPT4ge1xuICAgIGNvbnN0IG1pbj0wO1xuICAgIGNvbnN0IG1heD0xMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKSk7XG59XG5cblxuY29uc3QgcmVzdWx0ID0gKG51bWJlcjEsIG51bWJlcjIpID0+IHtcbiAgICByZXR1cm4gbnVtYmVyMSA/IHJlc3VsdChudW1iZXIyICUgbnVtYmVyMSwgbnVtYmVyMSkgOiBudW1iZXIyIDtcbn1cblxuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uID0gKGNvdW50ZXIgPSAwKSA9PiB7XG4gICAgY29uc3QgbnVtYmVyMSA9IHJhbmRvbSgpO1xuICAgIGNvbnN0IG51bWJlcjIgPSByYW5kb20oKTtcbiAgICBjb25zb2xlLmxvZygnUXVlc3Rpb246JywgbnVtYmVyMSwgbnVtYmVyMilcbiAgICBjb25zdCBhbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOicpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSByZXN1bHQobnVtYmVyMSwgbnVtYmVyMik7XG5pZiAoYW5zd2VyICE9IHJlc3VsdHMpIHtcbiAgICBjb25zb2xlLmxvZyhhbnN3ZXIgKyAnIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICcgKyByZXN1bHRzICsgJy4nKTtcbn1cbmlmIChhbnN3ZXIgPT0gcmVzdWx0cykge1xuICAgIGlmIChjb3VudGVyIDwgMikge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKVxuICAgICAgICByZXR1cm4gcXVlc3Rpb24oY291bnRlcisxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29uZ3JhdHVsYXRpb25zLCAnICsgbmFtZSArICchJylcbiAgICB9XG59XG59Il19