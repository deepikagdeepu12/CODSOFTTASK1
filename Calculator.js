
const screen = document.getElementById('answer');
let buttons = document.querySelectorAll('.btn');


let currentInput = '';
let currentOperator = '';
let firstInput = '';
let resultDisplayed = false;


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.innerText;
    
    if (value === 'CL') {
      clearScreen();
    } else if (value === '=') {
        if (currentOperator && firstInput && currentInput) {
            calculate();
          }
      
    } else if (value === '+/-' && currentInput !== '') {
      toggleSign();
    } else {
      updateScreen(value);
    }
  });
});

function clearScreen() {
  screen.value = '0';
  currentInput = '';
  currentOperator = '';
  firstInput = '';
  resultDisplayed = true;
}

function updateScreen(value) {
  if (resultDisplayed) {
    screen.value = '';
    resultDisplayed = false;
  }
  screen.value += value;
  currentInput += value;
}

function toggleSign() {
  if (currentInput.startsWith('-')) {
    currentInput = currentInput.slice(1);
  } else {
    currentInput = '-' + currentInput;
  }
  screen.value = currentInput;
}

function calculate() {
 
    if (currentOperator && firstInput && currentInput) {
      let result;
      const num1 = parseFloat(firstInput);
      const num2 = parseFloat(currentInput);
  
      switch (currentOperator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = 'Error: Division by zero';
          }
          break;
        default:
          result = 'Error';
      }
  
      screen.value = result.toString();
      currentInput = result.toString();
      firstInput = '';
      currentOperator = '';
      resultDisplayed = true;
    }
  }
  

