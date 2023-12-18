const textInput = document.querySelector("#validation-input");

const defaultLength = textInput.dataset.length;
const defaultLengthNum = Number(defaultLength);

textInput.addEventListener("blur", handlerInput);

function handlerInput(event) {
  const inputLength = event.currentTarget.value.length;
  if (defaultLengthNum > inputLength) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
}
