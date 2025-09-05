const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];

const user = {name: "louise", age: 20};
const newUser = {...user, city: "Malolos"};

const sum = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
