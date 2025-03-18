import { NextResponse } from 'next/server';
import { gins } from '@/lib/products';

export async function GET() {
  try {
    // In a real application, this would likely fetch from a database
    return NextResponse.json({ 
      products: gins,
      success: true 
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

// Endpoint to get a specific product by ID
export async function POST(request: Request) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }
    
    const product = gins.find(gin => gin.id === Number(id));
    
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    return NextResponse.json({ 
      product,
      success: true 
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
} 