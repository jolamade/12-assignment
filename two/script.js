// Function to remove extra spaces and keep only one space between words
function cleanEssaySpaces() {
    const essayInput = document.getElementById('essayInput').value;
    const outputArea = document.getElementById('outputArea');

    if (essayInput.trim() === "") {
        outputArea.textContent = "⚠ Please enter or paste an essay to clean.";
        return;
    }

    // Replace multiple spaces with a single space and trim leading/trailing spaces
    const cleanedEssay = essayInput.replace(/\s+/g, ' ').trim();

    // Display cleaned text
    outputArea.textContent = cleanedEssay;
}

// Function to clear both text areas
function clearText() {
    document.getElementById('essayInput').value = "";
    document.getElementById('outputArea').textContent = "";
}

// Event listeners
document.getElementById('cleanBtn').addEventListener('click', cleanEssaySpaces);
document.getElementById('clearBtn').addEventListener('click', clearText);