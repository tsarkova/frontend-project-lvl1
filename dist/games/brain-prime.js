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

const result = number => {
  return smallestDivisor(number) == number ? 'yes' : 'no';
};

const smallestDivisor = num => {
  if (num === 1) {
    return 1;
  }

  const iter = (counter, num) => {
    if (num % counter === 0) {
      return counter;
    } else {
      return iter(counter += 1, num);
    }
  };

  return iter(2, num);
};

const question = (counter = 0) => {
  const number = random();
  console.log('Question:', number);

  const answer = _readlineSync.default.question('Your answer:');

  const results = result(number);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1wcmltZS5qcyJdLCJuYW1lcyI6WyJuYW1lIiwidXNlck5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyZXN1bHQiLCJudW1iZXIiLCJzbWFsbGVzdERpdmlzb3IiLCJudW0iLCJpdGVyIiwiY291bnRlciIsImFuc3dlciIsInJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQUlBLElBQUksR0FBRyxFQUFYOztBQUVPLE1BQU1DLFFBQVEsR0FBRyxNQUFNO0FBQzFCRCxFQUFBQSxJQUFJLEdBQUdFLHNCQUFhQyxRQUFiLENBQXNCLHVCQUF0QixDQUFQO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVFMLElBQVIsR0FBZSxHQUEzQjtBQUNILENBSE07Ozs7QUFNUCxNQUFNTSxNQUFNLEdBQUcsTUFBTTtBQUNqQixRQUFNQyxHQUFHLEdBQUMsQ0FBVjtBQUNBLFFBQU1DLEdBQUcsR0FBQyxHQUFWO0FBQ0EsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEdBQUcsR0FBR0UsSUFBSSxDQUFDSCxNQUFMLE1BQWlCRSxHQUFHLEdBQUcsQ0FBTixHQUFVRCxHQUEzQixDQUFqQixDQUFQO0FBQ0gsQ0FKRDs7QUFPQSxNQUFNSSxNQUFNLEdBQUlDLE1BQUQsSUFBWTtBQUN2QixTQUFRQyxlQUFlLENBQUNELE1BQUQsQ0FBZixJQUEyQkEsTUFBNUIsR0FBc0MsS0FBdEMsR0FBOEMsSUFBckQ7QUFDSCxDQUZEOztBQUlBLE1BQU1DLGVBQWUsR0FBSUMsR0FBRCxJQUFTO0FBQy9CLE1BQUlBLEdBQUcsS0FBSyxDQUFaLEVBQWU7QUFDYixXQUFPLENBQVA7QUFDRDs7QUFDQyxRQUFNQyxJQUFJLEdBQUcsQ0FBQ0MsT0FBRCxFQUFVRixHQUFWLEtBQWtCO0FBQzdCLFFBQUtBLEdBQUcsR0FBR0UsT0FBUCxLQUFvQixDQUF4QixFQUEyQjtBQUN6QixhQUFPQSxPQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0gsYUFBT0QsSUFBSSxDQUFDQyxPQUFPLElBQUcsQ0FBWCxFQUFjRixHQUFkLENBQVg7QUFDTDtBQUNGLEdBTkM7O0FBT0YsU0FBT0MsSUFBSSxDQUFDLENBQUQsRUFBSUQsR0FBSixDQUFYO0FBQ0QsQ0FaRDs7QUFlTyxNQUFNWCxRQUFRLEdBQUcsQ0FBQ2EsT0FBTyxHQUFHLENBQVgsS0FBaUI7QUFDckMsUUFBTUosTUFBTSxHQUFHTixNQUFNLEVBQXJCO0FBQ0FGLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJPLE1BQXpCOztBQUNBLFFBQU1LLE1BQU0sR0FBR2Ysc0JBQWFDLFFBQWIsQ0FBc0IsY0FBdEIsQ0FBZjs7QUFDQSxRQUFNZSxPQUFPLEdBQUdQLE1BQU0sQ0FBQ0MsTUFBRCxDQUF0Qjs7QUFDSixNQUFJSyxNQUFNLElBQUlDLE9BQWQsRUFBdUI7QUFDbkJkLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWSxNQUFNLEdBQUcsMENBQVQsR0FBc0RDLE9BQXRELEdBQWdFLEdBQTVFO0FBQ0g7O0FBQ0QsTUFBSUQsTUFBTSxJQUFJQyxPQUFkLEVBQXVCO0FBQ25CLFFBQUlGLE9BQU8sR0FBRyxDQUFkLEVBQWlCO0FBQ2JaLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxhQUFPRixRQUFRLENBQUNhLE9BQU8sR0FBQyxDQUFULENBQWY7QUFDSCxLQUhELE1BR087QUFDSFosTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQXNCTCxJQUF0QixHQUE2QixHQUF6QztBQUNIO0FBQ0o7QUFDQSxDQWhCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmxldCBuYW1lID0gJyc7XG5cbmV4cG9ydCBjb25zdCB1c2VyTmFtZSA9ICgpID0+IHtcbiAgICBuYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8nKTtcbiAgICBjb25zb2xlLmxvZygnSGkgJyArIG5hbWUgKyAnIScpO1xufVxuXG5cbmNvbnN0IHJhbmRvbSA9ICgpID0+IHtcbiAgICBjb25zdCBtaW49MDtcbiAgICBjb25zdCBtYXg9MTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbikpO1xufVxuXG5cbmNvbnN0IHJlc3VsdCA9IChudW1iZXIpID0+IHtcbiAgICByZXR1cm4gKHNtYWxsZXN0RGl2aXNvcihudW1iZXIpID09IG51bWJlcikgPyAneWVzJyA6ICdubyc7XG59XG5cbmNvbnN0IHNtYWxsZXN0RGl2aXNvciA9IChudW0pID0+IHtcbiAgaWYgKG51bSA9PT0gMSkge1xuICAgIHJldHVybiAxOyBcbiAgfVxuICAgIGNvbnN0IGl0ZXIgPSAoY291bnRlciwgbnVtKSA9PiB7XG4gICAgICBpZiAoKG51bSAlIGNvdW50ZXIpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBjb3VudGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gaXRlcihjb3VudGVyICs9MSwgbnVtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGl0ZXIoMiwgbnVtKTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uID0gKGNvdW50ZXIgPSAwKSA9PiB7XG4gICAgY29uc3QgbnVtYmVyID0gcmFuZG9tKCk7XG4gICAgY29uc29sZS5sb2coJ1F1ZXN0aW9uOicsIG51bWJlcilcbiAgICBjb25zdCBhbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOicpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSByZXN1bHQobnVtYmVyKTtcbmlmIChhbnN3ZXIgIT0gcmVzdWx0cykge1xuICAgIGNvbnNvbGUubG9nKGFuc3dlciArICcgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgJyArIHJlc3VsdHMgKyAnLicpO1xufVxuaWYgKGFuc3dlciA9PSByZXN1bHRzKSB7XG4gICAgaWYgKGNvdW50ZXIgPCAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpXG4gICAgICAgIHJldHVybiBxdWVzdGlvbihjb3VudGVyKzEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25ncmF0dWxhdGlvbnMsICcgKyBuYW1lICsgJyEnKVxuICAgIH1cbn1cbn1cblxuXG5cblxuXG5cblxuIl19