import React, { createContext, useState } from 'react'
import Products from '../Products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  Products.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [filterItems, setFilterItems] = useState(Products);
  const [searchItemFilter, setSearchItemFilters] = useState("")
 console.log("cartItems",cartItems);

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    Object.keys(cartItems).forEach((item) => {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    });

    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const handleInputChange = (event) => {
    const searchItem = event.target.value;
    const filterFoodItems = Products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchItemFilters(searchItem);
    setFilterItems(filterFoodItems);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    handleInputChange,
    filterItems,
    searchItemFilter
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}


