const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgGallery = document.querySelector(".gallery");
const galery = images
  .map((item) => {
    const imgItemGallery = `<li><img src="${item.url}" alt="${item.alt}" /></li>`;
    return imgItemGallery;
  })
  .join("");

imgGallery.insertAdjacentHTML("beforeend", galery);

const imgGalleryItem = document.querySelectorAll("img");
imgGalleryItem.forEach((item) => item.classList.add("image"));

// imgGallery.style.listStyle = "none";
// imgGallery.style.maxWidth = "500px";
// const imgGalleryItem = document.querySelectorAll("img");
// imgGalleryItem.forEach((galeryItem) => (galeryItem.style.maxWidth = "100%"));
