import {updateCartValue} from "./updateCartValue.js";

export const getCartProductsFromLS = () => {
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
    return [];
  }

  cartProducts = JSON.parse(cartProducts);

  // update the cartValue button

  updateCartValue(cartProducts)

  return cartProducts;
};
