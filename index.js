// Handle Button Clicks

// Function to change the background color when a button is clicked
//function changeBackgroundColor() {
  // Implement the function to change background color
//}

// Function to reset the background color when the body is double-clicked
//function resetBackgroundColor() {
  // Implement the function to reset background color
//}

// Capture Keyboard Input

// Function to display the key pressed by the user
//function displayKeyPress(event) {
  // Implement the function to display key pressed
//}

// Process Text Input

// Function to display user input in real-time
//function displayUserInput() {
  // Implement the function to display user input
//}

// Attach Event Listeners
//function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  //document
    //.getElementById('changeColorButton')
    //.addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  //document
    //.getElementById('resetColorButton')
    //.addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  //document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  //document.getElementById('textInput').addEventListener('input', displayUserInput)
//}

// Initialize event listeners when the DOM is loaded
//if (typeof window !== 'undefined') {
  //document.addEventListener('DOMContentLoaded', setupEventListeners)
//}

function changeBackgroundColor() {
  document.body.style.backgroundColor = "yellow";
}
function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}
  
function displayKeyPress(event) {
  const keyDisplay = document.getElementById("key-display");
  keyDisplay.textContent = `You pressed: ${event.key}`;
}

function displayUserInput() { 
  const inputField = document.getElementById("textInput");
  const displayParagraph = document.getElementById("display-text");
  displayParagraph.textContent = inputField.value;
}

function setupEventListeners() {
  const changeBtn = document.getElementById("changeColorButton");
  const resetBtn = document.getElementById("resetColorButton");  
  const inputField = document.getElementById("textInput");

      changeBtn.addEventListener("click", changeBackgroundColor);
      resetBtn.addEventListener("dblclick", resetBackgroundColor);
    
    document.addEventListener("keydown", displayKeyPress);

      inputField.addEventListener("input", displayUserInput);
    }    
  
document.addEventListener("DOMContentLoaded", setupEventListeners);


module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
