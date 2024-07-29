import { cart } from './cart.js';
import { products } from './products.js';

let cartSummeryHTML = ''

cart.forEach((cartItem) => {
  const mealId = cartItem.mealId;

  let matchingProduct='';
  

  products.forEach((meal) => {
    if (meal.id === mealId) {
      matchingProduct = meal;
    }
  });
  
 
  cartSummeryHTML += `
  <div class="my-order customer-order">
          <div class="my-food-order">
            <img src="${matchingProduct.image}"/>
           <p>
            ${matchingProduct.name}
           </p>
          </div>

          <div class="amount">
            <div class="price">$${matchingProduct.price}</div>
            
            <div class="delete-edit check-out-quantity">
              <div class="quantity">${cartItem.quantity}</div>
              <div class="delete">Delete</div>
              <div class="Edit">Edit</div>
            </div>
          </div>
  </div>
  `;
 
});

document.querySelector('.js-order-summery').innerHTML = cartSummeryHTML


  