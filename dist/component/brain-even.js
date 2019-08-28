"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.question = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let name = '';

const userName = () => {
  name = _readlineSync.default.question('May I have your name?');
  console.log('Hi ' + name + '!');
};

const random = () => {
  const min = 0;
  const max = 100;
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const isEven = number => {
  return number % 2 === 0;
};

const question = (counter = 0) => {
  const number = random();
  console.log('Question:', number);

  const ask = _readlineSync.default.question('Your answer:');

  const even = isEven(number);
  const rightAnswer = isEven(number) ? 'yes' : 'no';

  if (ask != 'yes' && ask != 'no' || ask === 'yes' && even === false || ask === 'no' && even === true) {
    console.log(ask + ' is wrong answer ;(. Correct answer was ' + rightAnswer + '.');
  }

  if (ask === 'yes' && even === true || ask === 'no' && even === false) {
    if (counter < 2) {
      console.log('Correct!');
      return question(counter + 1);
    } else {
      console.log('Congratulations, ' + name + '!');
    }
  }
};

exports.question = question;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvYnJhaW4tZXZlbi5qcyJdLCJuYW1lcyI6WyJuYW1lIiwidXNlck5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJpc0V2ZW4iLCJudW1iZXIiLCJjb3VudGVyIiwiYXNrIiwiZXZlbiIsInJpZ2h0QW5zd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFJQSxJQUFJLEdBQUcsRUFBWDs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNuQkQsRUFBQUEsSUFBSSxHQUFHRSxzQkFBYUMsUUFBYixDQUFzQix1QkFBdEIsQ0FBUDtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFRTCxJQUFSLEdBQWUsR0FBM0I7QUFDSCxDQUhEOztBQU1BLE1BQU1NLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFFBQU1DLEdBQUcsR0FBQyxDQUFWO0FBQ0EsUUFBTUMsR0FBRyxHQUFDLEdBQVY7QUFDQSxTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBRyxHQUFHRSxJQUFJLENBQUNILE1BQUwsTUFBaUJFLEdBQUcsR0FBRyxDQUFOLEdBQVVELEdBQTNCLENBQWpCLENBQVA7QUFDSCxDQUpEOztBQU1BLE1BQU1JLE1BQU0sR0FBSUMsTUFBRCxJQUFZO0FBQ3ZCLFNBQU9BLE1BQU0sR0FBRyxDQUFULEtBQWUsQ0FBdEI7QUFDSCxDQUZEOztBQUlPLE1BQU1ULFFBQVEsR0FBRyxDQUFDVSxPQUFPLEdBQUcsQ0FBWCxLQUFpQjtBQUNyQyxRQUFNRCxNQUFNLEdBQUdOLE1BQU0sRUFBckI7QUFDQUYsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5Qk8sTUFBekI7O0FBQ0EsUUFBTUUsR0FBRyxHQUFHWixzQkFBYUMsUUFBYixDQUFzQixjQUF0QixDQUFaOztBQUNBLFFBQU1ZLElBQUksR0FBR0osTUFBTSxDQUFDQyxNQUFELENBQW5CO0FBQ0EsUUFBTUksV0FBVyxHQUFHTCxNQUFNLENBQUNDLE1BQUQsQ0FBTixHQUFpQixLQUFqQixHQUF5QixJQUE3Qzs7QUFDSixNQUFLRSxHQUFHLElBQUksS0FBUCxJQUFnQkEsR0FBRyxJQUFJLElBQXhCLElBQWtDQSxHQUFHLEtBQUssS0FBUixJQUFpQkMsSUFBSSxLQUFLLEtBQTVELElBQXVFRCxHQUFHLEtBQUssSUFBUixJQUFnQkMsSUFBSSxLQUFLLElBQXBHLEVBQTBHO0FBQ3RHWCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVMsR0FBRyxHQUFHLDBDQUFOLEdBQW1ERSxXQUFuRCxHQUFpRSxHQUE3RTtBQUNIOztBQUNELE1BQUtGLEdBQUcsS0FBSyxLQUFSLElBQWlCQyxJQUFJLEtBQUssSUFBM0IsSUFBcUNELEdBQUcsS0FBSyxJQUFSLElBQWdCQyxJQUFJLEtBQUssS0FBbEUsRUFBMEU7QUFDdEUsUUFBSUYsT0FBTyxHQUFHLENBQWQsRUFBaUI7QUFDYlQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLGFBQU9GLFFBQVEsQ0FBQ1UsT0FBTyxHQUFDLENBQVQsQ0FBZjtBQUNILEtBSEQsTUFHTztBQUNIVCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBc0JMLElBQXRCLEdBQTZCLEdBQXpDO0FBQ0g7QUFFSjtBQUNBLENBbEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxubGV0IG5hbWUgPSAnJztcblxuY29uc3QgdXNlck5hbWUgPSAoKSA9PiB7XG4gICAgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/Jyk7XG4gICAgY29uc29sZS5sb2coJ0hpICcgKyBuYW1lICsgJyEnKTtcbn1cblxuXG5jb25zdCByYW5kb20gPSAoKSA9PiB7XG4gICAgY29uc3QgbWluPTA7XG4gICAgY29uc3QgbWF4PTEwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pKTtcbn1cblxuY29uc3QgaXNFdmVuID0gKG51bWJlcikgPT4ge1xuICAgIHJldHVybiBudW1iZXIgJSAyID09PSAwO1xufVxuXG5leHBvcnQgY29uc3QgcXVlc3Rpb24gPSAoY291bnRlciA9IDApID0+IHtcbiAgICBjb25zdCBudW1iZXIgPSByYW5kb20oKTtcbiAgICBjb25zb2xlLmxvZygnUXVlc3Rpb246JywgbnVtYmVyKVxuICAgIGNvbnN0IGFzayA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6Jyk7XG4gICAgY29uc3QgZXZlbiA9IGlzRXZlbihudW1iZXIpO1xuICAgIGNvbnN0IHJpZ2h0QW5zd2VyID0gaXNFdmVuKG51bWJlcikgPyAneWVzJyA6ICdubyc7XG5pZiAoKGFzayAhPSAneWVzJyAmJiBhc2sgIT0gJ25vJykgfHwgKGFzayA9PT0gJ3llcycgJiYgZXZlbiA9PT0gZmFsc2UpIHx8IChhc2sgPT09ICdubycgJiYgZXZlbiA9PT0gdHJ1ZSkpe1xuICAgIGNvbnNvbGUubG9nKGFzayArICcgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgJyArIHJpZ2h0QW5zd2VyICsgJy4nKTtcbn1cbmlmICgoYXNrID09PSAneWVzJyAmJiBldmVuID09PSB0cnVlKSB8fCAoYXNrID09PSAnbm8nICYmIGV2ZW4gPT09IGZhbHNlKSkge1xuICAgIGlmIChjb3VudGVyIDwgMikge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKVxuICAgICAgICByZXR1cm4gcXVlc3Rpb24oY291bnRlcisxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29uZ3JhdHVsYXRpb25zLCAnICsgbmFtZSArICchJylcbiAgICB9XG4gICBcbn1cbn0iXX0=