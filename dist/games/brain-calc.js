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

const operation = () => {
  var sumbolArr = ['+', '-', '*'];
  var sumbol = sumbolArr[Math.floor(Math.random() * sumbolArr.length)];
  return sumbol;
};

const result = (number1, sumbol, number2) => {
  switch (sumbol) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;

    default:
      return '';
  }
};

const question = (counter = 0) => {
  const number1 = random();
  const number2 = random();
  const operationSumbol = operation();
  console.log('Question:', number1 + operationSumbol + number2);

  const answer = _readlineSync.default.question('Your answer:');

  const results = result(number1, operationSumbol, number2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1jYWxjLmpzIl0sIm5hbWVzIjpbIm5hbWUiLCJ1c2VyTmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyIsInJhbmRvbSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsIm9wZXJhdGlvbiIsInN1bWJvbEFyciIsInN1bWJvbCIsImxlbmd0aCIsInJlc3VsdCIsIm51bWJlcjEiLCJudW1iZXIyIiwiY291bnRlciIsIm9wZXJhdGlvblN1bWJvbCIsImFuc3dlciIsInJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQUlBLElBQUksR0FBRyxFQUFYOztBQUVPLE1BQU1DLFFBQVEsR0FBRyxNQUFNO0FBQzFCRCxFQUFBQSxJQUFJLEdBQUdFLHNCQUFhQyxRQUFiLENBQXNCLHVCQUF0QixDQUFQO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVFMLElBQVIsR0FBZSxHQUEzQjtBQUNILENBSE07Ozs7QUFNUCxNQUFNTSxNQUFNLEdBQUcsTUFBTTtBQUNqQixRQUFNQyxHQUFHLEdBQUMsQ0FBVjtBQUNBLFFBQU1DLEdBQUcsR0FBQyxHQUFWO0FBQ0EsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEdBQUcsR0FBR0UsSUFBSSxDQUFDSCxNQUFMLE1BQWlCRSxHQUFHLEdBQUcsQ0FBTixHQUFVRCxHQUEzQixDQUFqQixDQUFQO0FBQ0gsQ0FKRDs7QUFNQSxNQUFNSSxTQUFTLEdBQUcsTUFBTTtBQUNwQixNQUFJQyxTQUFTLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEI7QUFDQSxNQUFJQyxNQUFNLEdBQUdELFNBQVMsQ0FBQ0gsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0gsTUFBTCxLQUFnQk0sU0FBUyxDQUFDRSxNQUFyQyxDQUFELENBQXRCO0FBQ0EsU0FBT0QsTUFBUDtBQUNILENBSkQ7O0FBTUEsTUFBTUUsTUFBTSxHQUFHLENBQUNDLE9BQUQsRUFBVUgsTUFBVixFQUFrQkksT0FBbEIsS0FBOEI7QUFDNUMsVUFBT0osTUFBUDtBQUNHLFNBQUssR0FBTDtBQUNJLGFBQVFHLE9BQU8sR0FBQ0MsT0FBaEI7O0FBQ0osU0FBSyxHQUFMO0FBQ0ksYUFBUUQsT0FBTyxHQUFDQyxPQUFoQjs7QUFDSixTQUFLLEdBQUw7QUFDSSxhQUFRRCxPQUFPLEdBQUNDLE9BQWhCOztBQUNKO0FBQ0ksYUFBTyxFQUFQO0FBUlA7QUFVQSxDQVhEOztBQWFPLE1BQU1kLFFBQVEsR0FBRyxDQUFDZSxPQUFPLEdBQUcsQ0FBWCxLQUFpQjtBQUNyQyxRQUFNRixPQUFPLEdBQUdWLE1BQU0sRUFBdEI7QUFDQSxRQUFNVyxPQUFPLEdBQUdYLE1BQU0sRUFBdEI7QUFDQSxRQUFNYSxlQUFlLEdBQUdSLFNBQVMsRUFBakM7QUFDQVAsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlcsT0FBTyxHQUFHRyxlQUFWLEdBQTRCRixPQUFyRDs7QUFDQSxRQUFNRyxNQUFNLEdBQUdsQixzQkFBYUMsUUFBYixDQUFzQixjQUF0QixDQUFmOztBQUNBLFFBQU1rQixPQUFPLEdBQUdOLE1BQU0sQ0FBQ0MsT0FBRCxFQUFVRyxlQUFWLEVBQTJCRixPQUEzQixDQUF0Qjs7QUFDSixNQUFJRyxNQUFNLElBQUlDLE9BQWQsRUFBdUI7QUFDbkJqQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWUsTUFBTSxHQUFHLDBDQUFULEdBQXNEQyxPQUF0RCxHQUFnRSxHQUE1RTtBQUNIOztBQUNELE1BQUlELE1BQU0sSUFBSUMsT0FBZCxFQUF1QjtBQUNuQixRQUFJSCxPQUFPLEdBQUcsQ0FBZCxFQUFpQjtBQUNiZCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsYUFBT0YsUUFBUSxDQUFDZSxPQUFPLEdBQUMsQ0FBVCxDQUFmO0FBQ0gsS0FIRCxNQUdPO0FBQ0hkLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFzQkwsSUFBdEIsR0FBNkIsR0FBekM7QUFDSDtBQUVKO0FBQ0EsQ0FuQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5sZXQgbmFtZSA9ICcnO1xuXG5leHBvcnQgY29uc3QgdXNlck5hbWUgPSAoKSA9PiB7XG4gICAgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/Jyk7XG4gICAgY29uc29sZS5sb2coJ0hpICcgKyBuYW1lICsgJyEnKTtcbn1cblxuXG5jb25zdCByYW5kb20gPSAoKSA9PiB7XG4gICAgY29uc3QgbWluPTA7XG4gICAgY29uc3QgbWF4PTEwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pKTtcbn1cblxuY29uc3Qgb3BlcmF0aW9uID0gKCkgPT4ge1xuICAgIHZhciBzdW1ib2xBcnIgPSBbJysnLCAnLScsICcqJ107XG4gICAgdmFyIHN1bWJvbCA9IHN1bWJvbEFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzdW1ib2xBcnIubGVuZ3RoKV07XG4gICAgcmV0dXJuIHN1bWJvbDtcbn1cblxuY29uc3QgcmVzdWx0ID0gKG51bWJlcjEsIHN1bWJvbCwgbnVtYmVyMikgPT4ge1xuIHN3aXRjaChzdW1ib2wpIHtcbiAgICBjYXNlICcrJzpcbiAgICAgICAgcmV0dXJuIChudW1iZXIxK251bWJlcjIpO1xuICAgIGNhc2UgJy0nOlxuICAgICAgICByZXR1cm4gKG51bWJlcjEtbnVtYmVyMik7XG4gICAgY2FzZSAnKic6XG4gICAgICAgIHJldHVybiAobnVtYmVyMSpudW1iZXIyKTtcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gfVxufVxuXG5leHBvcnQgY29uc3QgcXVlc3Rpb24gPSAoY291bnRlciA9IDApID0+IHtcbiAgICBjb25zdCBudW1iZXIxID0gcmFuZG9tKCk7XG4gICAgY29uc3QgbnVtYmVyMiA9IHJhbmRvbSgpO1xuICAgIGNvbnN0IG9wZXJhdGlvblN1bWJvbCA9IG9wZXJhdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKCdRdWVzdGlvbjonLCBudW1iZXIxICsgb3BlcmF0aW9uU3VtYm9sICsgbnVtYmVyMilcbiAgICBjb25zdCBhbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOicpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSByZXN1bHQobnVtYmVyMSwgb3BlcmF0aW9uU3VtYm9sLCBudW1iZXIyKTtcbmlmIChhbnN3ZXIgIT0gcmVzdWx0cykge1xuICAgIGNvbnNvbGUubG9nKGFuc3dlciArICcgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgJyArIHJlc3VsdHMgKyAnLicpO1xufVxuaWYgKGFuc3dlciA9PSByZXN1bHRzKSB7XG4gICAgaWYgKGNvdW50ZXIgPCAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpXG4gICAgICAgIHJldHVybiBxdWVzdGlvbihjb3VudGVyKzEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25ncmF0dWxhdGlvbnMsICcgKyBuYW1lICsgJyEnKVxuICAgIH1cbiAgIFxufVxufSJdfQ==