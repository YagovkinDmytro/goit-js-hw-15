const form = document.querySelector(".login-form");
console.dir(form);
form.addEventListener("submit", hendlerSubmit);

// function hendlerSubmit(event) {
//   event.preventDefault();
//   const { email, password } = event.currentTarget.elements;
//   const info = {
//     userEmail: email.value,
//     userPassword: password.value,
//   };
//   console.log(info);
// }

function hendlerSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const info = {};

  formData.forEach((value, key) => {
    info[key] = value;
  });

  const isEmptyField = Object.values(info).some((value) => value === "");
  if (isEmptyField) {
    alert("Please fill in all fields of the form.");
  } else {
    console.log(info);
    event.currentTarget.reset();
  }
}
