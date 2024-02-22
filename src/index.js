import "./index.html";
import "./index.scss";
import { basket } from "./modules/basket.js";
import { main } from "./modules/main.js";
import { registration } from "./modules/registration.js";
import { catalog } from "./modules/catalog.js";
import { product } from "./modules/product.js";
window.serverInput = [
  {
    name: "ELLERY X M'O CAPSULE",
    id: 1234,
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    cost: 52,
    img: ["catalog-1.png", "catalog-9.png"],
    section: "man",
    type: "bags",
    discont: "0",
    active: true,
    quantity: [
      { color: "red", size: "s", quantity: 5 },
      { color: "blue", size: "m", quantity: 5 },
    ],
    basket: true,
    basketQuantity: 1,
  },
  {
    name: "ELLERY X M'O CAPSULE",
    id: 1234,
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    cost: 52,
    img: ["catalog-1.png", "catalog-8.png"],
    section: "man",
    type: "bags",
    discont: "0",
    active: true,
    quantity: [
      { color: "red", size: "s", quantity: 5 },
      { color: "blue", size: "m", quantity: 5 },
    ],
    basket: true,
    basketQuantity: 1,
  },
  {
    name: "ELLERY X M'O CAPSULE",
    id: 1234,
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    cost: 52,
    img: ["catalog-1.png", "catalog-7.png"],
    section: "man",
    type: "bags",
    discont: "0",
    active: true,
    quantity: [
      { color: "red", size: "s", quantity: 5 },
      { color: "blue", size: "m", quantity: 5 },
    ],
    basket: true,
    basketQuantity: 1,
  },
  {
    name: "ELLERY X M'O CAPSULE",
    id: 1234,
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    cost: 52,
    img: ["catalog-1.png", "catalog-6.png"],
    section: "man",
    type: "bags",
    discont: "0",
    active: true,
    quantity: [
      { color: "red", size: "s", quantity: 5 },
      { color: "blue", size: "m", quantity: 5 },
    ],
    basket: true,
    basketQuantity: 1,
  },
  {
    name: "ELLERY X M'O CAPSULE",
    id: 1234,
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    cost: 52,
    img: ["catalog-1.png", "catalog-5.png"],
    section: "man",
    type: "bags",
    discont: "0",
    active: true,
    quantity: [
      { color: "red", size: "s", quantity: 5 },
      { color: "blue", size: "m", quantity: 5 },
    ],
    basket: true,
    basketQuantity: 1,
  },
  {
    name: "ELLERY X M'O CAPSULE",
    id: 1234,
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    cost: 52,
    img: ["catalog-1.png", "catalog-4.png"],
    section: "man",
    type: "bags",
    discont: "0",
    active: true,
    quantity: [
      { color: "red", size: "s", quantity: 5 },
      { color: "blue", size: "m", quantity: 5 },
    ],
    basket: true,
    basketQuantity: 1,
  },
  {
    name: "ELLERY X M'O CAPSULE",
    id: 1234,
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    cost: 52,
    img: ["catalog-1.png", "catalog-3.png"],
    section: "man",
    type: "bags",
    discont: "0",
    active: true,
    quantity: [
      { color: "red", size: "s", quantity: 5 },
      { color: "blue", size: "m", quantity: 5 },
    ],
    basket: true,
    basketQuantity: 1,
  },
  {
    name: "ELLERY X M'O CAPSULE",
    id: 1234,
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    cost: 52,
    img: ["catalog-1.png", "catalog-2.png"],
    section: "man",
    type: "bags",
    discont: "0",
    active: true,
    quantity: [
      { color: "red", size: "s", quantity: 5 },
      { color: "blue", size: "m", quantity: 5 },
    ],
    basket: true,
    basketQuantity: 1,
  },
  {
    name: "ELLERY X M'O CAPSULE",
    id: 1234,
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    cost: 52,
    img: ["catalog-1.png", "catalog-1.png"],
    section: "man",
    type: "bags",
    discont: "0",
    active: true,
    quantity: [
      { color: "red", size: "s", quantity: 5 },
      { color: "blue", size: "m", quantity: 5 },
    ],
    basket: true,
    basketQuantity: 1,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("title").textContent == "Главная") {
    main();
  } else if (document.getElementById("title").textContent == "Корзина") {
    basket();
  } else if (document.getElementById("title").textContent == "Регистрация") {
    registration();
  } else if (document.getElementById("title").textContent == "Каталог") {
    catalog();
  } else if (document.getElementById("title").textContent == "Товар") {
    product();
  }
});
