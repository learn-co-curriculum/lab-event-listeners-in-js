// Handle Button Clicks:
// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  const colorButton = document.querySelector("#changeColorButton");
  colorButton.addEventListener("click", function() {
    // Change the background color on click
    colorButton.style.backgroundColor = "aquamarine";
    colorButton.style.color = "black";
  });
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  const colorButton = document.querySelector("#changeColorButton");
  const resetButton = document.querySelector("#resetColorButton");
  colorButton.addEventListener("click", function() {
    colorButton.style.backgroundColor= "";
    colorButton.style.color = "black";
  });

  resetButton.addEventListener("click", function() {
    colorButton.style.backgroundColor = "white"
    colorButton.style.color = "";
  });
}

// Capture Keyboard Input:
// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const keyPressDisplay = document.querySelector("keyPressDisplay");
  keyPressDisplay.textContent = `${event.key}:  was pressed`
}

// Process Text Input:
// Function to display user input in real-time
function displayUserInput(event) {
  // Implement the function to display user input
  const textInput = document.querySelector("#textInputDisplay");
  textInput.textContent = event.target.value;
}

// Attach Event Listeners:
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  colorButton.addEventListener("click", changeBackgroundColor);

  // Attach event listener to reset background color when the body is double-clicked
  document.body.addEventListener("dblclick", resetBackgroundColor);

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener("keydown", displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  textInput.addEventListener("input", displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}