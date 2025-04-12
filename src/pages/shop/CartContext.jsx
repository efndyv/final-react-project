

import { createContext, useContext, useState, useEffect } from "react";
import { productsData, shoesData } from "../../fakeDb/data";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, selectedSize, selectedVariant) => {
    const variantData = shoesData.find((item) => item.id === selectedVariant);
    // Benzersiz id oluşturuluyor
    const uniqueId = `${product.id}-${selectedVariant}-${selectedSize}`;

    const existingItem = cartItems.find((item) => item.uniqueId === uniqueId);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.uniqueId === uniqueId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          uniqueId,
          size: selectedSize,
          color: variantData.colorName,
          variantImages: variantData.images,
          quantity: 1,
          variant: selectedVariant,
        },
      ]);
    }
  };

  const increaseQuantity = (uniqueId) => {
    setCartItems(
      cartItems.map((item) =>
        item.uniqueId === uniqueId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (uniqueId) => {
    setCartItems(
      cartItems.reduce((acc, item) => {
        if (item.uniqueId === uniqueId) {
          if (item.quantity - 1 > 0) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
          // Miktar 0'a eşit oluyorsa ürünü eklemiyoruz (yani siliniyor)
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const removeFromCart = (uniqueId) => {
    setCartItems(cartItems.filter((item) => item.uniqueId !== uniqueId));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
