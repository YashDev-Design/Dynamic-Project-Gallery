function getRandomColor() {
  const colors = ["blue", "red", "orange", "darkviolet"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function calculateSum() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let sum = 0;
  let i = a;

  do {
    if (i > b) break;
    sum += i;
    i++;
  } while (i <= b);

  let resultElement = document.getElementById("result");
  resultElement.innerText = "Sum = " + sum;
  resultElement.style.color = getRandomColor();
}
