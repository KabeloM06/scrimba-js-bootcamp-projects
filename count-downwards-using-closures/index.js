// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown(num1, step) {
    let counter = num1 + step
    return function subtractNumber() {
        counter -= (step)
        return counter
    }
  }
  
  const countingDown = countdown(22, 3);
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  