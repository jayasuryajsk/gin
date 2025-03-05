import Client from 'shopify-buy';

// Initialize the Shopify client
const client = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'your-store.myshopify.com',
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'your-storefront-token',
});

// Function to create checkout with a single product
export async function createCheckout(productId, quantity = 1) {
  try {
    // First, we need to fetch the product to get its variants
    const product = await client.product.fetch(productId);
    
    // Get the first variant or the default variant
    const variantId = product.variants[0].id;
    
    // Create a new checkout
    const checkout = await client.checkout.create();
    
    // Add the product to the checkout
    const lineItemsToAdd = [{ variantId, quantity }];
    const checkoutWithItems = await client.checkout.addLineItems(
      checkout.id,
      lineItemsToAdd
    );
    
    // Return the checkout URL for redirect
    return checkoutWithItems.webUrl;
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
}

// Function to get a single product
export async function getProduct(productId) {
  try {
    const product = await client.product.fetch(productId);
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

// Function to get all products (we'll only use the first one)
export async function getProducts() {
  try {
    const products = await client.product.fetchAll();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export default client; 