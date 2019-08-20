"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userName = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userName = () => {
  const name = _readlineSync.default.question('May I have your name?');

  console.log('Hi ' + name + '!');
};

exports.userName = userName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VyTmFtZSIsIm5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQzFCLFFBQU1DLElBQUksR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0IsdUJBQXRCLENBQWI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVFKLElBQVIsR0FBZSxHQUEzQjtBQUNILENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5leHBvcnQgY29uc3QgdXNlck5hbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/Jyk7XG4gICAgY29uc29sZS5sb2coJ0hpICcgKyBuYW1lICsgJyEnKTtcbn0iXX0=