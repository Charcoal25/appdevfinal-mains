// \src\pages\UseCart.js
import { useState, useEffect } from "react";

export default function useCart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("my-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Persist to localStorage on cart change
  useEffect(() => {
    localStorage.setItem("my-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => {
        const sameName = item.name === product.name;
        const sameSize = item.selectedSize === product.selectedSize;

        /*const samePieces =
          item.selectedPieces !== undefined && product.selectedPieces !== undefined
            ? item.selectedPieces === product.selectedPieces
            : item.selectedPieces === product.selectedPieces;*/ // replaced by (V)

            const samePieces = item.selectedPieces === product.selectedPieces; 

        return sameName && sameSize && samePieces;
      });

      if (existingItemIndex !== -1) {
        const existingItem = prevCart[existingItemIndex];
        const unitPrice = product.price / product.quantity;
        const updatedQuantity = existingItem.quantity + product.quantity;
        const updatedItem = {
          ...existingItem,
          quantity: updatedQuantity,
          price: unitPrice * updatedQuantity,
        };

        return prevCart.map((item, i) =>
          i === existingItemIndex ? updatedItem : item
        );
      }

      return [...prevCart, { ...product }];
    });
  };

  const handleQuantityChange = (index, delta) => {
    setCart((prevCart) => {
      const item = prevCart[index];
      const newQuantity = item.quantity + delta;

      if (newQuantity <= 0) {
        return prevCart.filter((_, i) => i !== index);
      }

      const unitPrice = item.price / item.quantity;

      return prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: newQuantity, price: unitPrice * newQuantity }
          : item
      );
    });
  };

  const handleRemove = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const computeSubtotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return {
    cart,
    addToCart,
    handleQuantityChange,
    handleRemove,
    computeSubtotal,
    clearCart: () => {
      setCart([]);
      localStorage.removeItem("my-cart");
    },
  };
}
