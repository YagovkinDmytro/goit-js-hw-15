const textInput = document.querySelector("#validation-input");

const defaultLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", handlerInput);

function handlerInput(event) {
  const inputLength = event.currentTarget.value.length;
  if (defaultLength === inputLength) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
}
