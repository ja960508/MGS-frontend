const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => input.push(line)).on("close", () => solution(input));

function solution(input) {
  const numbers = input[1].split(" ");

  console.log(`${Math.min(...numbers)} ${Math.max(...numbers)}`);
}
