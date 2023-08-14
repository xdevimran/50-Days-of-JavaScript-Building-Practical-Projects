function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colorBoxes = document.querySelectorAll(".colorBox");
const changeColorButton = document.getElementById("colorButton");

changeColorButton.addEventListener("click", () => {
  colorBoxes.forEach((box) => {
    const randomColor = generateRandomColor();
    box.style.backgroundColor = randomColor;
    box.textContent = randomColor;
  });
});
