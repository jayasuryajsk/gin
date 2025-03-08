# Blue Wing Distillery Website

A modern e-commerce website for Blue Wing Distillery built with Next.js and Shopify integration.

## Features

- Modern, responsive design
- Shopify integration for product management and checkout
- Age verification for alcohol products
- Product catalog with detailed product pages
- Shopping cart functionality
- Secure checkout process

## Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Shopify Buy SDK
- Shadcn/ui Components

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your Shopify credentials:
```env
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
NEXT_PUBLIC_SHOPIFY_PRODUCT_ID=your-product-id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - React components
- `/lib` - Utility functions and shared code
- `/public` - Static assets

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

This project is private and confidential. All rights reserved. 