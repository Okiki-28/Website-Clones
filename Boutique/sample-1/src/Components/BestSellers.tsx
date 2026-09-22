// Components/BestSellers.tsx — updated to pull from shared data
import { PRODUCTS } from '../data/products'
import { ProductGrid } from './ProductGrid'

export const BestSellers = () => {
  const featured = PRODUCTS.slice(0, 4)

  return (
    <section className="best-sellers">
      <div className="best-sellers__header">
        <h2>Best Sellers</h2>
      </div>
      <ProductGrid products={featured} />
    </section>
  )
}