// Pages/CategoryPage.tsx
import { useParams, useSearchParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { ProductGrid } from '../Components/ProductGrid'

const LABELS: Record<string, string> = {
  dresses: 'Dresses',
  outerwear: 'Outerwear',
  knitwear: 'Knitwear',
  accessories: 'Accessories',
}

const AUDIENCE_LABELS: Record<string, string> = {
  women: 'Women',
  men: 'Men',
  children: 'Children',
}

export const CategoryPage = () => {
  const { category } = useParams<{ category: string }>()
  const [searchParams, setSearchParams] = useSearchParams()
  const activeAudience = searchParams.get('audience') ?? 'all'

  const categoryProducts = PRODUCTS.filter((p) => p.category === category)
  const label = (category && LABELS[category]) ?? 'Collection'

  // only offer filters for audiences that actually exist in this category
  const availableAudiences = Array.from(new Set(categoryProducts.map((p) => p.audience)))

  const products =
    activeAudience === 'all'
      ? categoryProducts
      : categoryProducts.filter((p) => p.audience === activeAudience)

  const setAudience = (value: string) => {
    if (value === 'all') {
      searchParams.delete('audience')
    } else {
      searchParams.set('audience', value)
    }
    setSearchParams(searchParams)
  }

  return (
    <main className="category-page">
      <div className="category-page__header">
        <h1>{label}</h1>

        {availableAudiences.length > 1 && (
          <div className="audience-filter">
            <button
              className={`audience-filter__btn ${activeAudience === 'all' ? 'is-active' : ''}`}
              onClick={() => setAudience('all')}
            >
              All
            </button>
            {availableAudiences.map((aud) => (
              <button
                key={aud}
                className={`audience-filter__btn ${activeAudience === aud ? 'is-active' : ''}`}
                onClick={() => setAudience(aud)}
              >
                {AUDIENCE_LABELS[aud] ?? aud}
              </button>
            ))}
          </div>
        )}
      </div>

      <ProductGrid products={products} />
    </main>
  )
}