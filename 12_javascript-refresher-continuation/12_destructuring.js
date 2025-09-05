const {name, age} = person;

const [walking, crafting, writing] = hobbies;

const person = {
    name: "louise",
    age: 20,
    printPerson: function() {
        return this.name + " is " + this.age + " years old.";
    }
}
