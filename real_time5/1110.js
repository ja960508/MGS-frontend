const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  console.log(solution(input));

  process.exit();
});

function solution(input) {
  const origin = Number(input);
  const first = parseInt(input / 10);
  const second = input % 10;
  let next = Number(String(second) + String((first + second) % 10));
  let answer = 0;

  while (origin != next) {
    const first = parseInt(next / 10);
    const second = next % 10;

    next = Number(String(second) + String((first + second) % 10));
    answer++;
  }

  return answer + 1;
}
