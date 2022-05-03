class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi = () => {
    console.log(
      "Hello my name is " + this.name + " I'm " + this.age + " years old."
    );
  };
}

export default new User("Lee", 27);
