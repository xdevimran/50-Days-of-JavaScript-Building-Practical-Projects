// Triangle  section
const baseInputField = document.getElementById("baseInputField");
const heightInputField = document.getElementById("heightInputField");
// const triangleAns = document.getElementById("triangleAns");
function calculateTriangleArea() {
  const baseValueText = baseInputField.value;
  const base = parseFloat(baseValueText);
  const heightValueText = heightInputField.value;
  const height = parseFloat(heightValueText);
  const area = 0.5 * base * height;
  triangleAns.innerText = area;
  baseInputField.value = "";
  heightInputField.value = "";
}

// Rectangle  section
const widthInputField = document.getElementById("widthInputField");
const lengthInputField = document.getElementById("lengthInputField");
const rectangleAns = document.getElementById("rectangleAns");
function calculateRectangleArea() {
  const widthValueText = widthInputField.value;
  const width = parseFloat(widthValueText);
  const lengthValueText = lengthInputField.value;
  const length = parseFloat(lengthValueText);
  const area = width * length;
  rectangleAns.innerText = area;
  widthInputField.value = "";
  lengthInputField.value = "";
}

// Parallelogram  section
function calculateParallelogramArea() {
  const base = getInputValue("parallelo-base-input");
  const height = getInputValue("parallelo-height-input");
  const paralleloArea = document.getElementById("paralleloAns");
  const area = base * height;
  paralleloArea.innerText = area;
}

// Utility Functions
function getInputValue(input) {
  const inputField = document.getElementById(input);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

// Rhombus section
function calculateRhombusArea() {
  const base = getInputValue("rhombus-base-input");
  const height = getInputValue("rhombus-height-input");
  const rhombusArea = document.getElementById("rhombusAns");
  const area = 0.5 * base * height;
  rhombusArea.innerText = area;
}

// Pentagon section
function calculatePentagonArea() {
  const width = getInputValue("pentagon-width-input");
  const length = getInputValue("pentagon-length-input");
  const pentagonArea = document.getElementById("pentagonAns");
  const area = width * length;
  pentagonArea.innerText = area;
}

// Ellipse section
function calculateEllipseArea() {
  const semiMajor = getInputValue("ellipse-semi-major-input");
  const semiMinor = getInputValue("ellipse-semi-minor-input");
  const ellipseArea = document.getElementById("ellipseAns");
  const area = Math.PI * semiMajor * semiMinor;
  ellipseArea.innerText = area;
}
