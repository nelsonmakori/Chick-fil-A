const products = [
  {
    image: "chikfla.images/Grilled_sandwich.png",
    price: 8.79,
    descripition: '480 cal per sandwich',
  },
  {
    image: "chikfla.images/meals.png",
    price: "10.49",
    descripition:"medium coca-cola cherry"
  },
  {
    image: "chikfla.images/8oz sauces.png",
    price: 3.00,
    descripition:"8oz chick-fil-A "
  },
]

let productsHTML = "";
products.forEach((menu)=>{
  productsHTML +=`
  <div class="top-section">
  <div class="sandwich">
    <img src="${menu.image}">
    <p class="price">${products.price}</p>
    <p class=${products.descripition}</p>
  
  </div>
  
  <div class="meals">
    <img src= ${products.image}/>
    <p class="price">$${products.price}</p>
    <p class="description">medium coca-cola cherry</p>
  </div>

  <div class="sauces">
    <img src="chikfla.images/8oz sauces.png" />
    <p class="price">3.00</p>
    <p class="description">8oz chick-fil-A </p>
    <p>sauces</p>
  </div>
</div>`


})
console.log(productsHTML)

const topSection = document.querySelector('.top-section').innerHTML;
console.log(topSection)
