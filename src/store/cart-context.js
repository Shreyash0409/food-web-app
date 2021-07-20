import React from "react";

//! We are intializing the intial value of the createContext just for getting the good autocompletion suggestions. Here we created the context generally but we need to manage that context as well. Using the provider method.
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
