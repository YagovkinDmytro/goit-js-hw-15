const inputController = document.querySelector("#font-size-control");
console.dir(inputController);
const text = document.querySelector("#text");
inputController.addEventListener("input", handlerControl);
function handlerControl() {
  text.style.fontSize = `${inputController.value}px`;
}
