const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector("#value");

minusButton.addEventListener("click", handlerClick);
plusButton.addEventListener("click", handlerClick);

let counterValue = 0;

function handlerClick(event) {
  switch (event.currentTarget) {
    case minusButton:
      counterValue -= 1;
      spanValue.textContent = counterValue;
      break;

    case plusButton:
      counterValue += 1;
      spanValue.textContent = counterValue;
      break;

    default:
  }
}
