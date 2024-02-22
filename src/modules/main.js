import { list } from "postcss";

console.log(main);
function main() {
  class Cart {
    constructor(name, text, cost, img) {
      this.name = name;
      this.text = text;
      this.cost = cost;
      this.img = img;
    }
    render() {
      return `<li class="cart__list"><div class="cart-wrapper"><img src="./assets/${this.img[1]}" alt="" class="cart__img" /><div class="cart__hover hidden__block"><button><img src="./img/basket-add.svg" alt="" /><p>Add to Cart</p></button></div></div><h3 class="cart__title"><a href="product.html">${this.name}</a></h3><p class="cart__text">${this.text}</p><p class="cart__cost">$${this.cost}</p></li>`;
    }
  }

  class LoadCatalog {
    constructor() {
      this.items = [];
    }
    fetchCatalog() {
      this.items = window.serverInput;
    }
    render() {
      let listAcc = "";
      this.items.forEach((item) => {
        const catalogItem = new Cart(item.name, item.text, item.cost, item.img);
        listAcc += catalogItem.render();
      });
      document.getElementById("catalog").innerHTML = listAcc;
    }
  }
  const mainCatalog = new LoadCatalog();
  mainCatalog.fetchCatalog();
  mainCatalog.render();
}
export { main };
