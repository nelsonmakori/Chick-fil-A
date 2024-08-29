
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
    price: 8.39,
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
  price:4.77,
  name:"meals"
  },
  {
    id:"5",
    image:"chikfla.images/Breakfast.png",
    price:3.99,
    name:"Breakfast"
  },
  {
    id:'6',
    image:"chikfla.images/sides.png",
    price:2.59,
    name:"sides"
  }
]