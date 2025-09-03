const foods = ["Adobo", "Sinigang", "Munggo"];

foods.push("Hatdog");

foods.shift();

for (let food of foods) {
    console.log(food);
}
const likedFoods = foods.map(food => "I like " + food);


console.log(likedFoods);

// VM4115:12 Sinigang
// VM4115:12 Munggo
// VM4115:12 Hatdog
// VM4115:19 (3) ['I like Sinigang', 'I like Munggo', 'I like Hatdog']