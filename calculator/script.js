const display = document.getElementById("display");
    
    function clearDisplay() {
      display.value = "";
    }
    
    function appendToDisplay(value) {
      display.value += value;
    }
    
    function calculate() {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    }
    
    document.querySelectorAll(".keys button").forEach(button => {
      button.addEventListener("click", function() {
        const buttonText = this.textContent;
        if (buttonText === "C") {
          clearDisplay();
        } else if (buttonText === "=") {
          calculate();
        } else {
          appendToDisplay(buttonText);
        }
      });
    });
