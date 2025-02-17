function getInputValues() {
  return {
    firstNum: parseFloat(document.getElementById("first").value),
    secondNum: parseFloat(document.getElementById("second").value),
  };
}

function displayResult(message) {
  document.getElementById("result").innerText = message;
}

function Add() {
  let { firstNum, secondNum } = getInputValues();
  if (isNaN(firstNum) || isNaN(secondNum))
    return displayResult("Error: Enter valid numbers.");
  displayResult("Result: " + (firstNum + secondNum));
}

function Subtract() {
  let { firstNum, secondNum } = getInputValues();
  if (isNaN(firstNum) || isNaN(secondNum))
    return displayResult("Error: Enter valid numbers.");
  displayResult("Result: " + (firstNum - secondNum));
}

function Multiply() {
  let { firstNum, secondNum } = getInputValues();
  if (isNaN(firstNum) || isNaN(secondNum))
    return displayResult("Error: Enter valid numbers.");
  displayResult("Result: " + firstNum * secondNum);
}

function Divide() {
  let { firstNum, secondNum } = getInputValues();
  if (isNaN(firstNum) || isNaN(secondNum))
    return displayResult("Error: Enter valid numbers.");
  if (secondNum === 0) return displayResult("Error: Cannot divide by zero.");
  displayResult("Result: " + firstNum / secondNum);
}

function Modulus() {
  let { firstNum, secondNum } = getInputValues();
  if (isNaN(firstNum) || isNaN(secondNum))
    return displayResult("Error: Enter valid numbers.");
  displayResult("Result: " + (firstNum % secondNum));
}

function Power() {
  let { firstNum, secondNum } = getInputValues();
  if (isNaN(firstNum) || isNaN(secondNum))
    return displayResult("Error: Enter valid numbers.");
  displayResult("Result: " + Math.pow(firstNum, secondNum));
}

function Square(which) {
  let num =
    which === "first"
      ? parseFloat(document.getElementById("first").value)
      : parseFloat(document.getElementById("second").value);

  if (isNaN(num)) return displayResult("Error: Enter a valid number.");

  displayResult(`Result: ${num}² = ${num * num}`);
}

function Factorial(which) {
  let num =
    which === "first"
      ? parseInt(document.getElementById("first").value)
      : parseInt(document.getElementById("second").value);

  if (isNaN(num) || num < 0)
    return displayResult("Error: Enter a non-negative integer.");

  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  displayResult(`Result: ${num}! = ${fact}`);
}

function Clear() {
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  document.getElementById("result").innerText = "0";
}
