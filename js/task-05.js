const nameImput = document.querySelector("#name-input");
const nameOutpnt = document.querySelector("#name-output");

let textImput = "Anonymous";
nameImput.addEventListener("input", (event) => {
  nameImput.value === ""
    ? (nameOutpnt.textContent = textImput)
    : (nameOutpnt.textContent = event.currentTarget.value);
});
