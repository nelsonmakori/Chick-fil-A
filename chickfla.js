
import {cart} from "../cart.js";
import{products} from "../products.js";

let generateHTML = "";

products.forEach((menu) => {
  generateHTML += `<div class="meals">
 <img src="${menu.image}">
 <div>${menu.name}</div>
  $${menu.price}
  <br>
  <button class="add-cart" data-food-name = "${menu.name}">add to cart</button>
  </div>
`;
});
console.log(generateHTML);
document.querySelector(".products").innerHTML = generateHTML;

const addToCart = document.querySelectorAll(".add-cart");
addToCart.forEach((button) => {
  button.addEventListener("click", () => {
    const mealName = button.dataset.foodName;

    let matchingItem;

    cart.forEach((item) => {
      if (mealName === item.mealName) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        mealName: mealName,
        quantity: 1,
      });
    }
    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    const totalCart = document.querySelector(".cart-quantity");
    totalCart.innerHTML = cartQuantity
    
  });
    
})
let menu = document.getElementById("menu");
let orderList = document.getElementById("orderList");

menu.addEventListener("mouseover", () => {
  orderList.style.display = "block";
  console.log("hapo vipi");
});
menu.addEventListener("mouseout", () => {
  orderList.style.display = "none";
});
console.log(orderList);
