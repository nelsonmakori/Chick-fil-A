export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [
    {
      mealId: "3",
      quantity: 1,
    },
    {
      mealId: "2",
      quantity: 2,
    },
    {
      mealId: "1",
      quantity: 3,
    },
  ];
}

function saveStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addCart(mealId) {
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
      quantity: 1
    });
  }
  saveStorage();
}

export function removeFromCart(mealId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.mealId !== mealId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveStorage();
}
