const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  solution(input);

  process.exit();
});

function solution(input) {
  const maximum = Math.max(...input);

  console.log(maximum, input.findIndex((item) => Number(item) === maximum) + 1);
}
