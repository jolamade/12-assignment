document.getElementById('checkBtn').addEventListener('click', () => {
    const temp = parseFloat(document.getElementById('tempInput').value);
    const output = document.getElementById('outputArea');

    if (isNaN(temp)) {
        output.textContent = "⚠ Please enter a valid temperature.";
        return;
    }

    if (temp < 19) {
        output.textContent = "❄ The temperature is Cold.";
    } else if (temp >= 20 && temp <= 28) {
        output.textContent = "The temperature is Warm.";
    } else {
        output.textContent = "The temperature is Hot.";
    }
});