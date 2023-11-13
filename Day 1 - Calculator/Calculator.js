const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const calculateButton = document.getElementById('calculate');
const result = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  const operationValue = operation.value;

  let resultValue = 0;
  switch (operationValue) {
    case '+':
      resultValue = num1Value + num2Value;
      break;
    case '-':
      resultValue = num1Value - num2Value;
      break;
    case '*':
      resultValue = num1Value * num2Value;
      break;
    case '/':
      resultValue = num1Value / num2Value;
      break;
    default:
      resultValue = 'Invalid operation';
  }

  result.value = resultValue;
});