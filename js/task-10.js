function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
  boxes: document.querySelector("#boxes"),
  numberController: document.querySelector("input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
};

elements.numberController.addEventListener("input", handlerInput);
elements.buttonCreate.addEventListener("click", handlerClick);
elements.buttonDestroy.addEventListener("click", handlerClick);

let amount = 0;
function handlerInput(event) {
  amount = Number(event.currentTarget.value);
  return console.log(amount);
}

function handlerClick(event) {
  if (event.currentTarget === elements.buttonCreate) {
    createBoxes(amount);
  } else if (event.currentTarget === elements.buttonDestroy) {
    destroy();
  }
}

function createBoxes(num) {
  let htmlDivString = "";
  let dimension = 30;
  for (let i = 0; i < num; i += 1) {
    const colorNumber = getRandomHexColor();
    htmlDivString += `<div style="background-color: ${colorNumber}; width: ${dimension}px; height: ${dimension}px;"></div>`;
    dimension += 10;
  }
  elements.boxes.innerHTML = htmlDivString;
  console.log(htmlDivString);
}

function destroy() {
  elements.boxes.innerHTML = "";
}
/////////////////////////////////////////////

// function handlerClick(event) {
//   let htmlDivString = "";
//   switch (event.currentTarget) {
//     case elements.buttonCreate:
//       function createBoxes(num) {
//         let dimension = 20;
//         for (let i = 0; i < num; i += 1) {
//           const colorNumber = getRandomHexColor();
//           console.log(colorNumber);
//           dimension += 10;
//           htmlDivString += `<div style="background-color: ${colorNumber}; width: ${dimension}px; height: ${dimension}px;"></div>`;
//         }
//         return htmlDivString;
//       }
//       createBoxes(amount);

//       elements.boxes.innerHTML = htmlDivString;
//       console.log(htmlDivString);
//       console.log(elements.boxes);
//       break;
//     case elements.buttonDestroy:
//       elements.boxes.innerHTML = "";
//       break;
//     default:
//   }
// }
