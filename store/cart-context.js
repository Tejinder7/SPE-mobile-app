import { createContext, useState } from "react";

export const CartContext = createContext({
  dishList: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

function CartContextProvider({ children }) {
  const [cartDishes, setCartDishes] = useState([]);

  function addToCart(dish) {
    setCartDishes((currentCartDishes) => [...currentCartDishes, dish]);
  }

  function removeFromCart(dishToRemove) {
    setCartDishes((currentCartDishes) =>
      currentCartDishes.filter((dish) => dish.dishId !== dishToRemove.dishId)
    );
  }

  const value = {
    dishList: cartDishes,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
