// const mock = require("./mock.json");

// console.log(mock);

// const str = JSON.stringify(mock);

// console.log(str);
// console.log(typeof str);
// console.log(JSON.parse(str));
// console.log(typeof JSON.parse(str));

// const obj = { id: 1234, name: "joo", age: 27, carrer: null };
// const arr = [1, 2, 3, 4, 5];

// const [a, b, ...rest] = arr;
// const { name, id, ...objRest } = obj;
// const { name: newName, id: newId, hi = "hello" } = obj;

// console.log(a, b, rest);
// console.log(name, id, objRest);
// console.log(newName, newId, hi);

// const info = {
//   firstName: "JooAm",
//   lastName: "Lee",
//   age: 27,
//   career: null,
//   skills: {
//     language: ["javascript, c, c++, python"],
//     tools: ["React, Redux, Koa"],
//     skillToLearn: ["TypeScript, MSW, Express, MongoDB"],
//   },
// };
// const newInfo = info;
// const realNewInfo = JSON.parse(JSON.stringify(info));

// realNewInfo.age = 30;
// realNewInfo.skills.hi = "Hello";

// console.log(newInfo);

// JSON 메소드 깊은 복사 예외

// const myObj = {
//   name: "Jooam",
//   carrer: null,
//   age: 27,
//   sayHello: function () {
//     console.log("Hello I'm", this.name);
//   },
// };

// myObj.sayHello();

// const newObj = JSON.parse(JSON.stringify(myObj));

// console.log(newObj);
