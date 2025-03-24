function calculate(operation) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Invalid input";
  } else {
    if (operation === "add") result = num1 + num2;
    if (operation === "subtract") result = num1 - num2;
    if (operation === "multiply") result = num1 * num2;
    if (operation === "divide")
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  }

  document.getElementById("res").value = result;
}
