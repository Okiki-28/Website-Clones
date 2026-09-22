// Components/ProductGrid.tsx
import type { Product } from '../data/products'
import { ProductCard } from './ProductCard'

export const ProductGrid = ({ products }: { products: Product[] }) => {
  if (products.length === 0) {
    return <p className="product-grid__empty">No products in this category yet.</p>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}