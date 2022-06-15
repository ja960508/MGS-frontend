const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2541`
).split("\n");

const input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

function solution() {
  const normalYear = input();
  const diff = 2541 - 1998;

  console.log(Number(normalYear) - diff);
}

solution();
