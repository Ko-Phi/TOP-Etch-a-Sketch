let mouseDown = false;
document.addEventListener("mousedown", () => {
  mouseDown = true;
  console.log(mouseDown);
});
document.addEventListener("mouseup", () => {
  mouseDown = false;
});

const display = document.querySelector(".display");
function generateDisplay(sideLength) {
  if (!Number.isInteger(+sideLength) || sideLength < 0 || sideLength > 100) {
    return;
  }
  display.innerHTML = "";
  for (let i = 0; i < sideLength ** 2; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = `${800 / sideLength}px`;
    display.appendChild(pixel);
    pixel.addEventListener("mouseover", () => handlePixelBehavior(pixel));
    pixel.addEventListener("mousedown", () => handlePixelBehavior(pixel, true));
  }
}
function handlePixelBehavior(pixel, isMouseDown = mouseDown) {
  if (isMouseDown) {
    pixel.style.backgroundColor = "black";
  }
}

const pixelInput = document.querySelector(".pixel-input");
pixelInput.value = "";
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", () => {
  generateDisplay(pixelInput.value);
});
generateDisplay(16);
