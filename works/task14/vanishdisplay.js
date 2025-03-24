

document.getElementById("generate").addEventListener("click", function() {
    let minInput = document.getElementById("min");
    let maxInput = document.getElementById("max");
    let resultDisplay = document.getElementById("result");
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);
    if (isNaN(min) || isNaN(max)) {
    resultDisplay.textContent = "Please enter valid numbers.";
    return;
    }
    if (min > max) {
    resultDisplay.textContent = "Minimum value should be less than or equal to maximum.";
    return;
    }
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    resultDisplay.textContent = "Random number is: " + randomNum;
    });
    function vanishAndReappear() {
    const uiContainer = document.getElementById("ui-container");
    uiContainer.style.display = "none"; // Hide UI
    alert("Times up! Wait for 10 seconds to get it back buddy!");
    setTimeout(function() {
    uiContainer.style.display = "block"; // Show UI again
    }, 10000); // 10 seconds
    }
    setTimeout(vanishAndReappear, 6000); // 6 seconds to hide
    