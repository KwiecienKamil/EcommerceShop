import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const storedItems = localStorage.getItem("item");
  const parsedItems = JSON.parse(storedItems);
  const [cartItems, setCartItems] = useState(parsedItems || []);

  const addToCart = (id, title, price, image) => {
    console.log(cartItems);
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        localStorage.setItem(
          "item",
          JSON.stringify([
            ...currItems,
            { id, image, title, price, quantity: 1 },
          ])
        );
        return [...currItems, { id, image, title, price, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  // setCartItems(currItems => {
  //   if(currItems.find(item => item.id === id) == null) {
  //     return [...currItems, item]
  //   }
  // })
  // }
  const removeFromCart = (deletedId) => {
    const updatedCart = cartItems.filter((id) => id !== deletedId);
    setCartItems(updatedCart);
    localStorage.setItem("item", JSON.stringify(updatedCart));
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    cartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
