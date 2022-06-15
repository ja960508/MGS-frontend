const fs = require("fs");
const stdin =
  process.platform == "linux" ? fs.readFileSync("/dev/stdin").toString() : ``;

const input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

function solution() {
  console.log(`         ,r'"7
r\`-_   ,'  ,/
 \\. ". L_r'
   \`~\\/
      |
      |`);
}

solution();
