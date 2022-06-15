const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10 24
5
7
5
4
2
7
8
5
3
4`
).split("\n");

const input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

function solution() {
  let [days, money] = input().split(" ").map(Number);
  let prev = Number(input());

  for (let i = 1; i < days; i++) {
    const current = Number(input());
    const diff = prev - current;

    if (diff < 0) {
      const coins = parseInt(money / prev);

      money += Math.abs(diff) * coins;
    }

    prev = current;
  }

  console.log(money);
}

solution();
