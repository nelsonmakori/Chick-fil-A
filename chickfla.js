
import {cart,addCart} from "./cart.js";
import{products} from "./products.js";

let generateHTML = "";

products.forEach((menu) => {
  generateHTML += `<div class="meals">
 <img src="${menu.image}">
 <div>${menu.name}</div>
  $${menu.price}
  <br>
  <button class="add-cart" data-food-id = "${menu.id}">add to cart</button>
  </div>
`;
});

document.querySelector(".products").innerHTML = generateHTML;

function updateQuantity(){

  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const totalCart = document.querySelector(".cart-quantity");
  totalCart.innerHTML = cartQuantity;
  
}

const addToCart = document.querySelectorAll(".add-cart");
addToCart.forEach((button) => {
  button.addEventListener("click", () => {
    const mealId = button.dataset.foodId;
    addCart(mealId)
    updateQuantity()
  }); 
});




let menu = document.getElementById("menu");
let orderList = document.getElementById("orderList");

menu.addEventListener("mouseover", () => {
  orderList.style.display = "block";
  
});
//menu.addEventListener("mouseout", () => {
  orderList.style.display = "none";
//});

