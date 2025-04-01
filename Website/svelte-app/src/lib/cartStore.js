import { writable } from 'svelte/store';

export const cart = writable([]);

// Functions for cart operations
export const addToCart = (product, quantity = 1) => {
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

export const removeFromCart = (productId) => {
  cart.update((items) => items.filter((item) => item.id !== productId));
};

export const clearCart = () => {
  cart.set([]);
};