//get the numbers from the imput and display them
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");

    window.appendToDisplay = function(input) {
      display.value += input;
    }

    window.calculate = function() {
    
        display.value = eval(display.value);
    }

    window.clearDisplay = function() {
      display.value = '';
    }
  });