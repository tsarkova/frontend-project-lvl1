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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1ldmVuLmpzIl0sIm5hbWVzIjpbIm5hbWUiLCJ1c2VyTmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyIsInJhbmRvbSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsImlzRXZlbiIsIm51bWJlciIsImNvdW50ZXIiLCJhc2siLCJldmVuIiwicmlnaHRBbnN3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQUlBLElBQUksR0FBRyxFQUFYOztBQUVPLE1BQU1DLFFBQVEsR0FBRyxNQUFNO0FBQzFCRCxFQUFBQSxJQUFJLEdBQUdFLHNCQUFhQyxRQUFiLENBQXNCLHVCQUF0QixDQUFQO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVFMLElBQVIsR0FBZSxHQUEzQjtBQUNILENBSE07Ozs7QUFNUCxNQUFNTSxNQUFNLEdBQUcsTUFBTTtBQUNqQixRQUFNQyxHQUFHLEdBQUMsQ0FBVjtBQUNBLFFBQU1DLEdBQUcsR0FBQyxHQUFWO0FBQ0EsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEdBQUcsR0FBR0UsSUFBSSxDQUFDSCxNQUFMLE1BQWlCRSxHQUFHLEdBQUcsQ0FBTixHQUFVRCxHQUEzQixDQUFqQixDQUFQO0FBQ0gsQ0FKRDs7QUFNQSxNQUFNSSxNQUFNLEdBQUlDLE1BQUQsSUFBWTtBQUN2QixTQUFPQSxNQUFNLEdBQUcsQ0FBVCxLQUFlLENBQXRCO0FBQ0gsQ0FGRDs7QUFJTyxNQUFNVCxRQUFRLEdBQUcsQ0FBQ1UsT0FBTyxHQUFHLENBQVgsS0FBaUI7QUFDckMsUUFBTUQsTUFBTSxHQUFHTixNQUFNLEVBQXJCO0FBQ0FGLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJPLE1BQXpCOztBQUNBLFFBQU1FLEdBQUcsR0FBR1osc0JBQWFDLFFBQWIsQ0FBc0IsY0FBdEIsQ0FBWjs7QUFDQSxRQUFNWSxJQUFJLEdBQUdKLE1BQU0sQ0FBQ0MsTUFBRCxDQUFuQjtBQUNBLFFBQU1JLFdBQVcsR0FBR0wsTUFBTSxDQUFDQyxNQUFELENBQU4sR0FBaUIsS0FBakIsR0FBeUIsSUFBN0M7O0FBQ0osTUFBS0UsR0FBRyxJQUFJLEtBQVAsSUFBZ0JBLEdBQUcsSUFBSSxJQUF4QixJQUFrQ0EsR0FBRyxLQUFLLEtBQVIsSUFBaUJDLElBQUksS0FBSyxLQUE1RCxJQUF1RUQsR0FBRyxLQUFLLElBQVIsSUFBZ0JDLElBQUksS0FBSyxJQUFwRyxFQUEwRztBQUN0R1gsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlTLEdBQUcsR0FBRywwQ0FBTixHQUFtREUsV0FBbkQsR0FBaUUsR0FBN0U7QUFDSDs7QUFDRCxNQUFLRixHQUFHLEtBQUssS0FBUixJQUFpQkMsSUFBSSxLQUFLLElBQTNCLElBQXFDRCxHQUFHLEtBQUssSUFBUixJQUFnQkMsSUFBSSxLQUFLLEtBQWxFLEVBQTBFO0FBQ3RFLFFBQUlGLE9BQU8sR0FBRyxDQUFkLEVBQWlCO0FBQ2JULE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxhQUFPRixRQUFRLENBQUNVLE9BQU8sR0FBQyxDQUFULENBQWY7QUFDSCxLQUhELE1BR087QUFDSFQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQXNCTCxJQUF0QixHQUE2QixHQUF6QztBQUNIO0FBRUo7QUFDQSxDQWxCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmxldCBuYW1lID0gJyc7XG5cbmV4cG9ydCBjb25zdCB1c2VyTmFtZSA9ICgpID0+IHtcbiAgICBuYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8nKTtcbiAgICBjb25zb2xlLmxvZygnSGkgJyArIG5hbWUgKyAnIScpO1xufVxuXG5cbmNvbnN0IHJhbmRvbSA9ICgpID0+IHtcbiAgICBjb25zdCBtaW49MDtcbiAgICBjb25zdCBtYXg9MTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbikpO1xufVxuXG5jb25zdCBpc0V2ZW4gPSAobnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIG51bWJlciAlIDIgPT09IDA7XG59XG5cbmV4cG9ydCBjb25zdCBxdWVzdGlvbiA9IChjb3VudGVyID0gMCkgPT4ge1xuICAgIGNvbnN0IG51bWJlciA9IHJhbmRvbSgpO1xuICAgIGNvbnNvbGUubG9nKCdRdWVzdGlvbjonLCBudW1iZXIpXG4gICAgY29uc3QgYXNrID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjonKTtcbiAgICBjb25zdCBldmVuID0gaXNFdmVuKG51bWJlcik7XG4gICAgY29uc3QgcmlnaHRBbnN3ZXIgPSBpc0V2ZW4obnVtYmVyKSA/ICd5ZXMnIDogJ25vJztcbmlmICgoYXNrICE9ICd5ZXMnICYmIGFzayAhPSAnbm8nKSB8fCAoYXNrID09PSAneWVzJyAmJiBldmVuID09PSBmYWxzZSkgfHwgKGFzayA9PT0gJ25vJyAmJiBldmVuID09PSB0cnVlKSl7XG4gICAgY29uc29sZS5sb2coYXNrICsgJyBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyAnICsgcmlnaHRBbnN3ZXIgKyAnLicpO1xufVxuaWYgKChhc2sgPT09ICd5ZXMnICYmIGV2ZW4gPT09IHRydWUpIHx8IChhc2sgPT09ICdubycgJiYgZXZlbiA9PT0gZmFsc2UpKSB7XG4gICAgaWYgKGNvdW50ZXIgPCAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpXG4gICAgICAgIHJldHVybiBxdWVzdGlvbihjb3VudGVyKzEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25ncmF0dWxhdGlvbnMsICcgKyBuYW1lICsgJyEnKVxuICAgIH1cbiAgIFxufVxufSJdfQ==