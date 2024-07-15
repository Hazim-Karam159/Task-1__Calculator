// This function clears all the values
function clearScreen() {
  document.getElementById("result").value = "";
  document.getElementById("finalResult").value = "";
}

// This function displays the values
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result
function calculate() {
  var p = document.getElementById("result").value;
  try {
    var q = Function('"use strict";return (' + p + ')')(); // Safer alternative to eval
    document.getElementById("result").value = q;
    document.getElementById("finalResult").value = q;
  } catch (err) {
    document.getElementById("result").value = "Error";
    document.getElementById("finalResult").value = "Error";
  }
}

// This function removes the last character from the input
function backspace() {
  var input = document.getElementById("result").value;
  document.getElementById("result").value = input.slice(0, -1);
}
