document.getElementById('calcBtn').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const output = document.getElementById('outputArea');

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        output.textContent = "⚠ Please enter valid weight and height values.";
        return;
    }

    const bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    output.textContent = Your BMI is ${bmi.toFixed(2)} (${category}).;
});