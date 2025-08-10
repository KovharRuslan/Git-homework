function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    const num = getRandom(100, 1000); // 100..1000 включно
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const evenPercent = (evenCount / count) * 100;
  const oddPercent  = (oddCount  / count) * 100;
  const closeTo50   = Math.abs(evenPercent - 50) < 5; // ±5%

  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Парних чисел: ${evenCount}`);
  console.log(`Непарних чисел: ${oddCount}`);
  console.log(`Відсоток парних: ${evenPercent.toFixed(2)}%`);
  console.log(`Відсоток непарних: ${oddPercent.toFixed(2)}%`);
  console.log(`Відсоток парних близький до 50%: ${closeTo50}`);
}
checkProbabilityTheory(1000);
