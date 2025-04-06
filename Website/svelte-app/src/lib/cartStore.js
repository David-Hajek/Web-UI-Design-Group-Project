import { writable } from "svelte/store";

export const cart = writable([])

// Functions for cart operations
export const addToCart = (product, quantity) => {
  cart.update((items) => {
    const existingItem = items.find((item) => item.id === product.id);
    if (existingItem) {
      return items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      return [...items, { ...product, quantity }];
    }
  });
};

// Decrease quantity of an item (minimum of 1)
export const decreaseItemQuantity = (productId) => {
  cart.update((items) =>
    items.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};

// Increase quantity of an item
export const increaseItemQuantity = (productId) => {
  cart.update((items) =>
    items.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};



export const removeFromCart = (productId) => {
cart.update((items) => items.filter((item) => item.id !== productId));
};

export const clearCart = () => {
cart.set([]);
};