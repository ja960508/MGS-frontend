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
  const [a, b] = input[0]
    .split(" ")
    .map((item) => item.split("").reverse().join(""));

  console.log(Math.max(a, b));
}
