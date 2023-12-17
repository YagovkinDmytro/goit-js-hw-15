const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

/////Option #1/////

const listOfIngredients = document.querySelector("#ingredients");

let arrIngr = [];
const listIngr = ingredients.forEach((name) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = name;
  arrIngr.push(listItem);
});

listOfIngredients.append(...arrIngr);
