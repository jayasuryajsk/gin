import Client from 'shopify-buy';

// Initialize the Shopify client with custom config
let client;

try {
  client = Client.buildClient({
    domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'your-store.myshopify.com',
    storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'your-storefront-token',
    apiVersion: '2024-01',
    // Set language and country code for proper context
    language: 'EN',
    country: 'AU', // Set to Australia or your primary market
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

// Custom fetch function that uses GraphQL directly for better context control
async function fetchWithContext(query, variables = {}) {
  try {
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'your-store.myshopify.com'}/api/2024-01/graphql.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'your-storefront-token',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      }
    );

    const result = await response.json();
    
    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      throw new Error(result.errors[0].message);
    }
    
    return result.data;
  } catch (error) {
    console.error('Error in fetchWithContext:', error);
    throw error;
  }
}

// Function to get a single product with proper context
export async function getProduct(productId) {
  try {
    // First try to use the custom context-aware approach
    try {
      // GraphQL query with proper context for pricing
      const query = `
        query ProductById($id: ID!) @inContext(country: AU, language: EN) {
          product(id: $id) {
            id
            title
            descriptionHtml
            handle
            images(first: 10) {
              edges {
                node {
                  id
                  src: originalSrc
                  altText
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  compareAtPrice {
                    amount
                    currencyCode
                  }
                  available
                }
              }
            }
          }
        }
      `;
      
      const data = await fetchWithContext(query, { id: productId });
      
      if (data && data.product) {
        // Transform the data to match shopify-buy SDK format
        const product = data.product;
        
        // Format variants to match SDK structure
        const variants = product.variants.edges.map(edge => {
          const variant = edge.node;
          return {
            id: variant.id,
            title: variant.title,
            price: variant.price.amount,
            compareAtPrice: variant.compareAtPrice?.amount,
            available: variant.available,
          };
        });
        
        // Format images to match SDK structure
        const images = product.images.edges.map(edge => {
          return {
            id: edge.node.id,
            src: edge.node.src,
            altText: edge.node.altText,
          };
        });
        
        return {
          id: product.id,
          title: product.title,
          descriptionHtml: product.descriptionHtml,
          handle: product.handle,
          images,
          variants,
        };
      }
      throw new Error('Product not found using GraphQL');
    } catch (graphQlError) {
      console.warn('GraphQL fetch failed, falling back to SDK:', graphQlError);
      // Fallback to the SDK method if the custom approach fails
      const product = await client.product.fetch(productId);
      console.log('Product fetched with SDK:', product);
      return product;
    }
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