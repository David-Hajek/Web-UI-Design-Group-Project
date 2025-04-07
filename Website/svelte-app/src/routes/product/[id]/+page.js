import { products } from '$lib/productStore';

// This function tells SvelteKit which specific IDs to prerender
export function entries() {
  return products.map(product => ({
    id: product.id.toString()
  }));
}

// Enable prerendering for this route
export const prerender = true;

