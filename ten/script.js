document.getElementById('checkBtn').addEventListener('click', () => {
    const itemCount = parseInt(document.getElementById('itemCount').value);
    const output = document.getElementById('outputArea');

    if (isNaN(itemCount)) {
        output.textContent = "⚠ Please enter a valid number.";
        return;
    }

    if (itemCount % 2 === 0) {
        output.textContent = "The number of items is even. Discount applied!";
    } else {
        output.textContent = "The number of items is odd. No discount this time.";
    }
});