"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _random = require("../modules/random");

var _engine = _interopRequireDefault(require("./engine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const result = () => {
  const number1 = (0, _random.random)();
  const number2 = (0, _random.random)();
  const sumbolArr = ['+', '-', '*'];
  const sumbol = sumbolArr[Math.floor(Math.random() * sumbolArr.length)];
  const question = `${number1} ${sumbol} ${number2}`;

  switch (sumbol) {
    case '+':
      return {
        question,
        answer: number1 + number2
      };

    case '-':
      return {
        question,
        answer: number1 - number2
      };

    case '*':
      return {
        question,
        answer: number1 * number2
      };

    default:
      return '';
  }
};

const questionText = 'Find the greatest common divisor of given numbers.';

var _default = () => (0, _engine.default)(result, questionText);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1jYWxjLmpzIl0sIm5hbWVzIjpbInJlc3VsdCIsIm51bWJlcjEiLCJudW1iZXIyIiwic3VtYm9sQXJyIiwic3VtYm9sIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJxdWVzdGlvblRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUdBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFFBQU1DLE9BQU8sR0FBRyxxQkFBaEI7QUFDQSxRQUFNQyxPQUFPLEdBQUcscUJBQWhCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWxCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHRCxTQUFTLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLFNBQVMsQ0FBQ0ssTUFBckMsQ0FBRCxDQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBSSxHQUFFUixPQUFRLElBQUdHLE1BQU8sSUFBR0YsT0FBUSxFQUFqRDs7QUFDQSxVQUFRRSxNQUFSO0FBQ0UsU0FBSyxHQUFMO0FBQ0UsYUFBTztBQUFFSyxRQUFBQSxRQUFGO0FBQVlDLFFBQUFBLE1BQU0sRUFBRVQsT0FBTyxHQUFHQztBQUE5QixPQUFQOztBQUNGLFNBQUssR0FBTDtBQUNFLGFBQU87QUFBRU8sUUFBQUEsUUFBRjtBQUFZQyxRQUFBQSxNQUFNLEVBQUVULE9BQU8sR0FBR0M7QUFBOUIsT0FBUDs7QUFDRixTQUFLLEdBQUw7QUFDRSxhQUFPO0FBQUVPLFFBQUFBLFFBQUY7QUFBWUMsUUFBQUEsTUFBTSxFQUFFVCxPQUFPLEdBQUdDO0FBQTlCLE9BQVA7O0FBQ0Y7QUFDRSxhQUFPLEVBQVA7QUFSSjtBQVVELENBaEJEOztBQWtCQSxNQUFNUyxZQUFZLEdBQUcsb0RBQXJCOztlQUVlLE1BQU0scUJBQU9YLE1BQVAsRUFBZVcsWUFBZixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vbW9kdWxlcy9yYW5kb20nO1xuaW1wb3J0IGVuZ2luZSBmcm9tICcuL2VuZ2luZSc7XG5cblxuY29uc3QgcmVzdWx0ID0gKCkgPT4ge1xuICBjb25zdCBudW1iZXIxID0gcmFuZG9tKCk7XG4gIGNvbnN0IG51bWJlcjIgPSByYW5kb20oKTtcbiAgY29uc3Qgc3VtYm9sQXJyID0gWycrJywgJy0nLCAnKiddO1xuICBjb25zdCBzdW1ib2wgPSBzdW1ib2xBcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3VtYm9sQXJyLmxlbmd0aCldO1xuICBjb25zdCBxdWVzdGlvbiA9IGAke251bWJlcjF9ICR7c3VtYm9sfSAke251bWJlcjJ9YDtcbiAgc3dpdGNoIChzdW1ib2wpIHtcbiAgICBjYXNlICcrJzpcbiAgICAgIHJldHVybiB7IHF1ZXN0aW9uLCBhbnN3ZXI6IG51bWJlcjEgKyBudW1iZXIyIH07XG4gICAgY2FzZSAnLSc6XG4gICAgICByZXR1cm4geyBxdWVzdGlvbiwgYW5zd2VyOiBudW1iZXIxIC0gbnVtYmVyMiB9O1xuICAgIGNhc2UgJyonOlxuICAgICAgcmV0dXJuIHsgcXVlc3Rpb24sIGFuc3dlcjogbnVtYmVyMSAqIG51bWJlcjIgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBxdWVzdGlvblRleHQgPSAnRmluZCB0aGUgZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3Igb2YgZ2l2ZW4gbnVtYmVycy4nO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBlbmdpbmUocmVzdWx0LCBxdWVzdGlvblRleHQpO1xuIl19