var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",
  "Розбити скло": "200 грн",
  "Фарбування волосся": "300 грн",
  "Масаж голови": "150 грн"
};
function price() {
  let total = 0;
  for (let key in services) {
    total += parseInt(services[key]);
  }
  return total + " грн";
}
function minPrice() {
  let min = Infinity;
  for (let key in services) {
    let value = parseInt(services[key]);
    if (value < min) {
      min = value;
    }
  }
  return min + " грн";
}
function maxPrice() {
  let max = -Infinity;
  for (let key in services) {
    let value = parseInt(services[key]);
    if (value > max) {
      max = value;
    }
  }
  return max + " грн";
}
console.log("Загальна вартість:", price());
console.log("Мінімальна ціна:", minPrice());
console.log("Максимальна ціна:", maxPrice());
