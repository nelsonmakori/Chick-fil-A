
 export function getProducts(mealId){

  let matchingProduct;

  products.forEach((meal) => {
    if (meal.id === mealId) {
      matchingProduct = meal;
    }
  });

  return matchingProduct;

}
export const products = [
  {
    id:"3",
    image:"chikfla.images/salads.png",
    price: 7.49,
    name:"salad"
  },
  {
    id:"1",
    image:'chikfla.images/treats.png',
    price: 8.99,
    name:"limited time flavors"
  },
  {
    id:"2",
    image:"chikfla.images/Beverages.png",
    price: 10.99,
    name:"beverage"
  },
  {
  id:"4",
  image:"chikfla.images/meals.png",
  price:4.99,
  name:"meals"
  }
]