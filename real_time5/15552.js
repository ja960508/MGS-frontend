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
  const numOfCases = input[0];
  const result = [];

  for (let i = 1; i <= numOfCases; i++) {
    const [a, b] = input[i].split(" ").map(Number);

    result.push(a + b);
  }

  console.log(result.join("\n"));
}
