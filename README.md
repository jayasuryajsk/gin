# Blue Wing Gin Website

This is the official website for Blue Wing Gin, built with Next.js and integrated with Shopify for e-commerce functionality.

## Shopify Integration Setup

To complete the Shopify integration, follow these steps:

1. **Create a Shopify Account**:
   - If you don't have one already, sign up for a Shopify account
   - Create your store

2. **Add Your Product**:
   - In your Shopify admin, go to Products > Add product
   - Add your gin product with all details (images, description, price, etc.)
   - Make note of the product ID (you'll need this later)

3. **Set Up Storefront API Access**:
   - In Shopify admin, go to Settings > Apps and sales channels
   - Click on "Develop apps"
   - Create a new app (name it "Blue Wing Gin Website")
   - Once created, go to the app settings
   - Under "Storefront API", select "Configure"
   - Enable the following scopes:
     - read_products
     - write_checkouts
   - Save your changes
   - Copy the "Storefront API access token" that's generated

4. **Update Environment Variables**:
   - In this project, find the `.env.local` file
   - Update the values with your actual Shopify store information:
     ```
     NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
     NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
     NEXT_PUBLIC_SHOPIFY_PRODUCT_ID=gid://shopify/Product/your-product-id
     ```
   - For the product ID, it should be in the format: `gid://shopify/Product/1234567890`
   - You can find your product ID by looking at the URL when editing the product in Shopify admin

5. **Test the Integration**:
   - Start the development server
   - Check that your product is displaying correctly
   - Test the "Buy Now" button to ensure it redirects to the Shopify checkout
   - Complete a test order to verify everything is working

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

## Deployment

This website can be deployed to platforms like Vercel, Netlify, or any hosting service that supports Next.js applications. 