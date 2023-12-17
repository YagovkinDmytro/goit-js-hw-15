const categories = document.querySelector("#categories");
const categoriesItemsList = [...categories.children];
const categoriesNumber = `Number of categories: ${categoriesItemsList.length}`;
console.log(categoriesNumber);

const categoryName = categoriesItemsList.forEach((category) => {
  const categoryName = `Category: ${category.firstElementChild.textContent}`;
  const listItem = category.lastElementChild;
  const lengthOfCategory = `Elements: ${listItem.children.length}`;

  return console.log(categoryName), console.log(lengthOfCategory);
});
