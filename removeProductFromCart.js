import { getCartProductsFromLS } from "./getCartProductsFromLS.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProductFromCart = (id) => {
  let cartProducts = getCartProductsFromLS();
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  // update the local storage after removing the item

  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  //     remove the Cart Product

  let removeDiv = document.getElementById(`cart${id}`);

  if (removeDiv) {
    removeDiv.remove();
  }

  updateCartValue(cartProducts);
};
