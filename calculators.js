function equals() {
  var one = parseFloat(document.querySelector('#one').value, 10);
  var two = parseFloat(document.querySelector('#two').value, 10);
  var operator = document.querySelector('#operator').value;
  var eredmeny;
  if (operator === 'plus') {
    eredmeny = one + two;
  }
  if (operator === 'minus') {
    eredmeny = one - two;
  }
  if (operator === 'multiply') {
    eredmeny = one * two;
  }
  if (operator === 'divide') {
    eredmeny = one / two;
  }
  document.getElementById('result').value = eredmeny;
}

function calculate() {
  var Tnumber1 = parseFloat(document.getElementById('tnum1').value);
  var Tnumber2 = parseFloat(document.getElementById('tnum2').value);
  var Top = document.getElementById('tmuvelet').value;

  if (Top === '+') {
    document.getElementById('vegeredmeny').value = Tnumber1 + Tnumber2;
  }
  if (Top === '-') {
    document.getElementById('vegeredmeny').value = Tnumber1 - Tnumber2;
  }
  if (Top === '*') {
    document.getElementById('vegeredmeny').value = Tnumber1 * Tnumber2;
  }
  if (Top === '/') {
    document.getElementById('vegeredmeny').value = Tnumber1 / Tnumber2;
  }
}

function calc() {
  var anciNumber1 = parseFloat(
    document.getElementById('anciNumber1Input').value
  );
  var anciNumber2 = parseFloat(
    document.getElementById('anciNumber2Input').value
  );
  var anciOper = document.getElementById('anciOperators').value;

  if (anciOper === 'plus') {
    document.getElementById('anciResult').value = anciNumber1 + anciNumber2;
  }
  if (anciOper === 'minus') {
    document.getElementById('anciResult').value = anciNumber1 - anciNumber2;
  }
  if (anciOper === 'multiplying') {
    document.getElementById('anciResult').value = anciNumber1 * anciNumber2;
  }
  if (anciOper === 'division') {
    document.getElementById('anciResult').value = anciNumber1 / anciNumber2;
  }
}

function noriCalculator() {
  var n1 = parseFloat(document.getElementById('numberoneInput').value);
  var n2 = parseFloat(document.getElementById('numbertwoInput').value);
  var operation = document.getElementById('operationInput').value;
  var add = document.getElementById('addInput').value;
  var sub = document.getElementById('subtractionInput').value;
  var multiple = document.getElementById('multipleInput').value;
  var division = document.getElementById('divisionInput').value;
  if (operation === add) {
    document.getElementById('resultInput').value = n1 + n2;
  } else if (operation === sub) {
    document.getElementById('resultInput').value = n1 - n2;
  } else if (operation === multiple) {
    document.getElementById('resultInput').value = n1 * n2;
  } else if (operation === division) {
    document.getElementById('resultInput').value = n1 / n2;
  }
  // alert(document.getElementById('resultInput').value);
}

function renicalc() {
  var num1 = parseFloat(document.getElementById('num1Reni').value, 10);
  var num2 = parseFloat(document.getElementById('num2Reni').value, 10);
  var op = document.getElementById('operatorReni').value;

  if (op === '+') {
    document.getElementById('resultReni').value = num1 + num2;
  }
  if (op === '-') {
    document.getElementById('resultReni').value = num1 - num2;
  }
  if (op === '*') {
    document.getElementById('resultReni').value = num1 * num2;
  }
  if (op === '/') {
    document.getElementById('resultReni').value = num1 / num2;
  }
}
