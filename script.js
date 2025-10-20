// Function to convert text to lowercase
function convertToLowercase() {
    const input = document.getElementById('addressInput').value;
    const outputArea = document.getElementById('outputArea');

    if (input.trim() = "") {
        outputArea.textContent = "Please enter an address to convert.";
        return;
    }

    // Transform all addresses to lowercase
    const lowercased = input.toLowerCase();

    // Display result
    outputArea.textContent = lowercased;
}

// Event listeners
document.getElementById('convertBtn').addEventListener('click', convertToLowercase);
document.getElementById('clearBtn').addEventListener('click', clearText);