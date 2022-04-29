const str = `
010-1234-5678
ja960508@gmail.com
https://jsonplaceholder.typicode.com/todos/
abbbcccdddd
Good Afternoon, Good Evening and Good Night
`;

const regexp = new RegExp("good", "gi");
const reglit = /Good/gi;

console.log(str.match(regexp));
