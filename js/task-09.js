function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorNumber = document.querySelector(".color");
const button = document.querySelector(".change-color");
button.addEventListener("click", handlerClick);

function handlerClick() {
  const curentColor = getRandomHexColor();
  body.style.backgroundColor = curentColor;
  colorNumber.textContent = curentColor;
}
