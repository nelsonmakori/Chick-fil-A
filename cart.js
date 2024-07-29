 
 export const cart = [
  {
  mealId: "3",
  quantity: 1,
 },{
  mealId: "2",
  quantity: 2,
},{
  mealId: "1",
  quantity: 3,
}
]

  export function addCart(mealId){
  
  let matchingItem;

    cart.forEach((cartItem) => {
      if (mealId === cartItem.mealId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        mealId: mealId,
        quantity: 1,
      })
    };
}

