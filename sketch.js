let buttons = [
  ["0", " ", ".", "="],
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "x"],
  ["AC", "^", "%", "÷"],
];

let outputValue = 0;
let inputString = "";
let operator = "";
let percent = false;
let cleanScreen = false;

let bx = 0;
let by = 0;

function keyPressed() {
  if (cleanScreen) {
    inputString = "";
    cleanScreen = false;
  }
  if (keyIsDown(SHIFT)) {
    if (keyCode == 187) {
      inputString += "+";
      operator += "+";
    } else if (keyCode == 56) {
      inputString += "*";
      operator += "*";
    } else if (keyCode == 54) {
      inputString += "^";
      operator += "^";
    }
  } else if (keyCode >= 48 && keyCode <= 58) {
    inputString += keyCode - 48;
  } else if (keyCode == 187) {  // Equal button
    calculate();
  } else if (keyCode == 189) {
    inputString += "-";
    operator += "-";
  } else if (keyCode == 190) {
    inputString += ".";
    operator += ".";
  } else if (keyCode == 191) {
    inputString += "÷";
    operator += "÷";
  } else if (keyIsDown(BACKSPACE)) {
    if (isNaN(inputString[inputString.length - 1])) {
      operator = operator.substring(0, operator.length - 1);
    }
    inputString = inputString.substring(0, inputString.length - 1);

  } else if (keyIsDown(DELETE)) {
    inputString = "";
  } else if (keyIsDown(ENTER)) {
    outputValue = calculate();
    cleanScreen = true;
  }
}

function mousePressed() {
  if (cleanScreen) {
    inputString = outputValue;
    operator = "";
    outputValue = "";
    cleanScreen = false;
  }

  let buttonHeight = height * 14 / 100;
  let buttonWidth = width / 4;

  bx = 0;
  by = height * 30 / 100;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString = "";
    operator = "";
  }

  bx = 0;
  by = height * 30 / 100 + buttonHeight;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "7";
  }

  bx = 0;
  by = height * 30 / 100 + buttonHeight * 2;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "4";
  }

  bx = 0;
  by = height * 30 / 100 + buttonHeight * 3;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "1";
  }

  bx = 0;
  by = height * 30 / 100 + buttonHeight * 4;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "0";
  }

  bx = width / 4;
  by = height * 30 / 100;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "^";
    operator += "^";
    checkMultipleOpt();
  }

  bx = width / 4;
  by = height * 30 / 100 + buttonHeight * 1;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "8";
  }
  bx = width / 4;
  by = height * 30 / 100 + buttonHeight * 2;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "5";
  }
  bx = width / 4;
  by = height * 30 / 100 + buttonHeight * 3;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "2";
  }
  bx = width / 4;
  by = height * 30 / 100 + buttonHeight * 4;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "0";
  }
  bx = width / 2;
  by = height * 30 / 100 + buttonHeight * 0;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "%";
    percent = true;
  }
  bx = width / 2;
  by = height * 30 / 100 + buttonHeight * 1;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "9";
  }
  bx = width / 2;
  by = height * 30 / 100 + buttonHeight * 2;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "6";
  }
  bx = width / 2;
  by = height * 30 / 100 + buttonHeight * 3;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "3";
  }
  bx = width / 2;
  by = height * 30 / 100 + buttonHeight * 4;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += ".";
  }

  bx = width * 75 / 100;
  by = height * 30 / 100 + buttonHeight * 0;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "÷";
    operator += "÷";
    checkMultipleOpt();
  }
  bx = width * 75 / 100;
  by = height * 30 / 100 + buttonHeight * 1;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "*";
    operator += "*";
    checkMultipleOpt();
  }
  bx = width * 75 / 100;
  by = height * 30 / 100 + buttonHeight * 2;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "-";
    operator += "-";
    checkMultipleOpt();
  }
  bx = width * 75 / 100;
  by = height * 30 / 100 + buttonHeight * 3;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    inputString += "+";
    operator += "+";
    checkMultipleOpt();
  }
  bx = width * 75 / 100;
  by = height * 30 / 100 + buttonHeight * 4;

  if (mouseX > bx &&
    mouseX < bx + buttonWidth &&
    mouseY > by &&
    mouseY < by + buttonHeight
  ) {
    checkMultipleOpt();
    outputValue = calculate();
    cleanScreen = true;
  }

}

function calculate() {
  let calculatedValue = 0;
  let value = [];

  value = inputString.split(operator);
  console.log("Calculate Function Called");
  console.log("InputString is: " + inputString);
  console.log(operator);
  console.log(value);


  let allNumbers = value.every(val => !isNaN(parseFloat(val)));
  if (!allNumbers) {
    return 0;
  }


  switch (operator) {
    case "+":
      calculatedValue = value.reduce((acc, curr) => acc + parseFloat(curr), 0);
      break;
    case "-":
      calculatedValue = value.reduce((acc, curr) => acc - parseFloat(curr));
      break;
    case "*":
      calculatedValue = value.reduce((acc, curr) => acc * parseFloat(curr), 1);
      break;
    case "÷":

      if (value.some(val => parseFloat(val) === 0)) {
        return "Error: Division by zero";
      }
      calculatedValue = value.reduce((acc, curr) => acc / parseFloat(curr));
      break;
    case "^":
      calculatedValue = value.reduce((acc, curr) => Math.pow(acc, parseFloat(curr)));
      break;
    default:
      break;
  }

  operator = "";
  return calculatedValue.toString();
}


function checkMultipleOpt() {
  if (operator.length > 1) {
    console.log("Triggered. Operator is: " + operator);

    let newOperator = operator.substring(1, operator.length);

    console.log("And new opt is: " + newOperator);

    operator = operator.substring(0, operator.length - 1);
    inputString = inputString.substring(0, inputString.length - 1);
    let calculatedValueHere = calculate();
    inputString = calculatedValueHere.toString() + newOperator.toString();
    operator = newOperator;
  }
}

function drawCalculator() {
  fill(224);
  rect(0, height * 30 / 100, width, height * 100 / 100);
  fill(247, 146, 49);
  rect(width * 75 / 100, height * 30 / 100, width * 25 / 100, height * 70 / 100);
  for (let i = 1; i <= 5; i++) {
    let y = (height * 70 / 100) / 5 * i;
    line(0, height * 30 / 100 + y, width, height * 30 / 100 + y);
  }
  for (let i = 1; i <= 4; i++) {
    let x = width / 4 * i;
    line(x, height * 30 / 100, x, i == 1 ? height * 86 / 100 : height);
  }
}

function drawNumbers() {
  fill(0);
  textSize(width / 8);
  textAlign(CENTER, CENTER);
  let _x = 0;
  let _y = 0;
  for (let yPos = 1; yPos <= 9; yPos += 2) {
    for (let xPos = 1; xPos <= 7; xPos += 2) {
      text(buttons[4 - _y][_x], width * ((12.5 * xPos) / 100), height * (31 + (7 * yPos)) / 100);
      _x += 1;
    }
    _x = 0;
    _y += 1;
  }
}

function updateDisplay() {
  fill(48, 77, 109);
  rect(0, 0, width, height * 30 / 100);
  fill(255);
  textSize(width / 10);
  textAlign(LEFT, TOP);


  while (inputString.length > 17) {
    let extraChar = inputString.length - 17;
    inputString = inputString.substr(1);
  }
  text(inputString, width * 3 / 100, height * 3 / 100);

  textSize(width / 9);
  textAlign(RIGHT, TOP);
  text(outputValue, width * 97 / 100, height * 21 / 100);
}

function setup() {
  createCanvas(windowHeight * 72 / 100, windowHeight * 92 / 100);
  background(48, 77, 109);
  drawCalculator();
  drawNumbers();

}

function draw() {
  updateDisplay();

}