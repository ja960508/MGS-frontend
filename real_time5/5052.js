const fs = require("fs");
const stdin = (
  process.platform == "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
    3
    911
    97625999
    91125426
    5
    113
    12340
    123440
    12345
    98346`
)
  .split("\n")
  .map((item) => item.trim());

const input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

const numOfTestCases = Number(input());

function solution() {
  const numOfPhoneNumbers = Number(input());
  const phoneNumbers = [];

  for (let i = 0; i < numOfPhoneNumbers; i++) {
    phoneNumbers.push(input());
  }

  phoneNumbers.sort();

  for (let i = 0; i < numOfPhoneNumbers - 1; i++) {
    if (phoneNumbers[i] < phoneNumbers[i + 1]) {
      // for (let j = 0; j < phoneNumbers[i].length; j++) {
      //   if (phoneNumbers[i][j] !== phoneNumbers[i + 1][j]) {
      //     prefix = false;
      //     break;
      //   }
      // }

      if (
        phoneNumbers[i + 1].slice(0, phoneNumbers[i].length) === phoneNumbers[i]
      ) {
        return "NO";
      }
    }
  }

  return "YES";
}

for (let i = 0; i < numOfTestCases; i++) {
  console.log(solution());
}
