const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
    1
    3
    4
    2`
)
  .split("\n")
  .map((item) => item.trim());

const input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

function solution() {
  const numOfBooks = Number(input());
  const books = [];
  let answer = numOfBooks;
  let maxValue = numOfBooks;

  for (let i = numOfBooks; i > 0; i--) {
    books.push(Number(input()));
  }

  const maxIndex = books.findIndex((item) => item === numOfBooks);

  for (let i = maxIndex; i >= 0; i--) {
    if (books[i] === maxValue) {
      maxValue--;
      answer--;
    }
  }

  console.log(answer);
}

solution();
