class person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hi, I am " + this.name);
    }
}

class Student extends person {
  study() {
    console.log(this.name + " is studying");
  }
}