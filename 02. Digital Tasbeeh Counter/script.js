const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const subhanAllahIncrimentBtn = document.getElementById(
  "subhanAllahIncrimentBtn"
);
const subhanAllahDecrimentBtn = document.getElementById(
  "subhanAllahDecrimentBtn"
);

const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");
const alhamdulillahIncrimentBtn = document.getElementById(
  "alhamdulillahIncrimentBtn"
);
const alhamdulillahDecrimentBtn = document.getElementById(
  "alhamdulillahDecrimentBtn"
);

const allahAkberDisplay = document.getElementById("allahAkberDisplay");
const allahAkberIncrimentBtn = document.getElementById(
  "allahAkberIncrimentBtn"
);
const allahAkberDecrimentBtn = document.getElementById(
  "allahAkberDecrimentBtn"
);

const resetBtn = document.getElementById("resetBtn");

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAKberInitialValue = 0;

// Subhan Allah section
subhanAllahIncrimentBtn.addEventListener("click", function () {
  if (subhanAllahInitialValue === 33) {
    return alert("SubhanAllah Completed ");
  }
  subhanAllahInitialValue += 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

subhanAllahDecrimentBtn.addEventListener("click", function () {
  if (subhanAllahInitialValue === 0) {
    return alert("you can't add negative value");
  }
  subhanAllahInitialValue -= 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

// Alhamdulillah section
alhamdulillahIncrimentBtn.addEventListener("click", function () {
  if (alhamdulillahInitialValue === 33) {
    return alert("Alhamdulillah Completed ");
  }
  alhamdulillahInitialValue += 1;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});

alhamdulillahDecrimentBtn.addEventListener("click", function () {
  if (alhamdulillahInitialValue === 0) {
    return alert("you can't add negative value");
  }
  alhamdulillahInitialValue -= 1;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});

// Allahuakber section
allahAkberIncrimentBtn.addEventListener("click", function () {
  if (allahAKberInitialValue === 34) {
    return alert("Allahuakber Completed ");
  }
  allahAKberInitialValue += 1;
  allahAkberDisplay.innerText = allahAKberInitialValue;
});

allahAkberDecrimentBtn.addEventListener("click", function () {
  if (allahAKberInitialValue === 0) {
    return alert("you can't add negative value");
  }
  allahAKberInitialValue -= 1;
  allahAkberDisplay.innerText = allahAKberInitialValue;
});

resetBtn.addEventListener("click", function () {
  subhanAllahDisplay.innerText = 0;
  alhamdulillahDisplay.innerText = 0;
  allahAkberDisplay.innerText = 0;

  subhanAllahInitialValue = 0;
  alhamdulillahInitialValue = 0;
  allahAKberInitialValue = 0;
});
