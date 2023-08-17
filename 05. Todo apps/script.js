const addBtn = document.getElementById("add-btn");
const inputBox = document.getElementById("input-box");
const paragraphContainer = document.getElementById("paragraphContainer");

addBtn.addEventListener("click", function () {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = inputBox.value;
  inputBox.value = '';
  paragraphContainer.appendChild(newParagraph);
  
});
