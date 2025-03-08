import Client from 'shopify-buy';

// Initialize the Shopify client
let client;

try {
  client = Client.buildClient({
    domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'your-store.myshopify.com',
    storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'your-storefront-token',
    apiVersion: '2024-01',
  });
} catch (error) {
  console.error('Error initializing Shopify client:', error);
  // Fallback client to prevent crashes
  client = {
    product: {
      fetch: () => Promise.reject(new Error('Shopify client not properly initialized')),
      fetchAll: () => Promise.reject(new Error('Shopify client not properly initialized')),
    },
    checkout: {
      create: () => Promise.reject(new Error('Shopify client not properly initialized')),
      addLineItems: () => Promise.reject(new Error('Shopify client not properly initialized')),
    },
  };
}

// Function to create checkout with multiple products
export async function createCheckout(items) {
  try {
    console.log('Creating checkout with items:', items);
    
    // Create a new checkout
    const checkout = await client.checkout.create();
    console.log('Created checkout:', checkout);
    
    // Transform cart items into line items
    const lineItemsToAdd = items.map(item => ({
      variantId: item.id,
      quantity: item.quantity
    }));
    
    console.log('Adding line items:', lineItemsToAdd);
    
    // Add the products to the checkout
    const checkoutWithItems = await client.checkout.addLineItems(
      checkout.id,
      lineItemsToAdd
    );
    
    console.log('Checkout with items:', checkoutWithItems);
    
    // Return the checkout URL for redirect
    return checkoutWithItems.webUrl;
  } catch (error) {
    console.error('Detailed error in createCheckout:', error);
    if (error.message) {
      console.error('Error message:', error.message);
    }
    throw error;
  }
}

// Function to get a single product
export async function getProduct(productId) {
  try {
    // Use the shopify-buy SDK
    const product = await client.product.fetch(productId);
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

// Function to get all products
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