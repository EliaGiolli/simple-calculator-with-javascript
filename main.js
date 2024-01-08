// Get the input display element
const display = document.getElementById("display");

// Function to append a value to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to calculate the result
function calculate() {
  // Get the current value of the display
  const expression = display.value;
  
  // Use eval() to evaluate the expression and get the result
  const result = eval(expression);
  
  // Set the display value to the result
  display.value = result;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}