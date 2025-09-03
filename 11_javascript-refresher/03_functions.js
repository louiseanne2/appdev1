//greet(name)
function greet(name) {
    return "Hello, " + name + "!"
}

//square(num)
const square = (num) => num * num;

//calculator(a, b)
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function calculator(a, b) {
    console.log("Sum:", add(a, b));
    console.log("Product:", multiply(a, b));
}



undefined
console.log(greet("Louise"))
//VM2713:1 Hello, Louise!
undefined
console.log("Square of 5:", square(5));
//VM2720:1 Square of 5: 25
undefined
const result = calculator(10, 5);
//VM2702:17 Sum: 15
//VM2702:18 Product: 50
undefined