// Pages/SalePage.tsx
import { useState } from 'react'
import { PRODUCTS } from '../data/products'
import { ProductGrid } from '../Components/ProductGrid'

const CATEGORY_LABELS: Record<string, string> = {
  dresses: 'Dresses',
  outerwear: 'Outerwear',
  knitwear: 'Knitwear',
  accessories: 'Accessories',
}

export const SalePage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const saleProducts = PRODUCTS.filter((p) => p.onSale)
  const categories = Array.from(new Set(saleProducts.map((p) => p.category)))

  const products =
    activeCategory === 'all'
      ? saleProducts
      : saleProducts.filter((p) => p.category === activeCategory)

  const discounts = saleProducts.map((p) =>
    p.salePrice ? Math.round((1 - p.salePrice / p.originalPrice) * 100) : 0
  )
  const maxDiscount = discounts.length ? Math.max(...discounts) : 0

  return (
    <main className="category-page">
      <div className="category-page__header">
        <h1>Sale{maxDiscount > 0 ? ` — Up to ${maxDiscount}% Off` : ''}</h1>

        {categories.length > 1 && (
          <div className="audience-filter">
            <button
              className={`audience-filter__btn ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`audience-filter__btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        )}
      </div>

      <ProductGrid products={products} />
    </main>
  )
}