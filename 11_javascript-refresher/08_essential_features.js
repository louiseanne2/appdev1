const hobbies = ["Reading", "Sleeping", "Writing"]
const hobbyList = hobbies.map(hobby => "I Love" + hobby)
console.log(hobbyList)
//VM358:3 (3) ['I LoveReading', 'I LoveSleeping', 'I LoveWriting']0: "I LoveReading"1: "I LoveSleeping"2: "I LoveWriting"length: 3[[Prototype]]: Array(0)

const aboutMe = {name: "Louise", age: 20}
const {name, age} = aboutMe
console.log(name)
console.log(age)
//VM728:3 Louise
//VM728:4 20

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5]

console.log(newNumbers)
//VM967:1 (5) [1, 2, 3, 4, 5]
