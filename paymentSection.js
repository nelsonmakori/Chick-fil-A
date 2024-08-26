import { cart } from "./cart.js";
import { getProducts } from "./products.js";
import {formatCurrency} from "./moneyCents.js"

export function paymentSummery() {
  let productPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProducts(cartItem.mealId);
    productPriceCents += product.price * cartItem.quantity;
  });

  const totalBeforeTax = productPriceCents;
  const taxCents = totalBeforeTax * 0.1;
  const totalCents = productPriceCents + taxCents
  console.log(totalCents);

  const paymentSummaryHTML = `
      <h3>order Summery</h3>
        <div class="order-summery">
          <div class="items">
            <div>item(3):</div>
            <div class="items-amount">$${Math.round(productPriceCents).toFixed(2)}</div>
          </div>
          <div class="total-before-tax">
            <div>Total before tax:</div>
            <div>$${Math.round(totalBeforeTax).toFixed(2)}</div>
          </div>
          <div class="estimated-tax">
            <div>estimated tax (10%):</div>
            <div class="tax-amount">$${Math.round(taxCents)}</div>
          </div>
        </div>

        <hr class="check-out-hr">

        <div class="order-footer">
          <div class="order-total">
            <div>order-total</div>
            <div>$${Math.round(totalCents)}</div>
            
          </div>
        </div>
        <button class="place-order">place your order</button>
      </div>
  `;
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}
