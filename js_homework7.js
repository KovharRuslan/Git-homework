


const regex = /^[^Aa]{6,}$/;


const words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];


console.log("Wonderful:", regex.test("Wonderful")); // очікуємо true
console.log("Joyful:", regex.test("Joyful"));       // очікуємо true
console.log("Happiness:", regex.test("Happiness")); // очікуємо false
console.log("Time:", regex.test("Time"));           // очікуємо false
console.log("Task:", regex.test("Task"));           // очікуємо false
console.log("Apple:", regex.test("Apple"));         // очікуємо false
});



