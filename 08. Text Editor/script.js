// left icon links
const textBoldBtn = document.getElementById("text-bold");
const textIlalicBtn = document.getElementById("text-italic");
const textUnderlineBtn = document.getElementById("text-underline");
const textArea = document.getElementById("text-area");

// text bold button
textBoldBtn.addEventListener("click", function () {
  textArea.classList.toggle("font-bold");
});
// text italic button
textIlalicBtn.addEventListener("click", function () {
  textArea.classList.toggle("italic");
});
// text Underline button
textUnderlineBtn.addEventListener("click", function () {
  textArea.classList.toggle("underline");
});

// middle icon links
const textRightBtn = document.getElementById("text-right");
const textCenterBtn = document.getElementById("text-center");
const textLeftBtn = document.getElementById("text-left");
const textJustifyBtn = document.getElementById("text-justify");

textRightBtn.addEventListener("click", function () {
  textArea.classList.toggle("text-right");
});

textCenterBtn.addEventListener("click", function () {
  textArea.classList.toggle("text-center");
});

textLeftBtn.addEventListener("click", function () {
  textArea.classList.toggle("text-left");
});

textJustifyBtn.addEventListener("click", function () {
  textArea.classList.toggle("text-justify");
});
