// Pages/NewArrivalsPage.tsx
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { ProductGrid } from '../Components/ProductGrid'

const LABELS: Record<string, string> = {
  women: "New In — Women",
  men: "New In — Men",
}

export const NewArrivalsPage = () => {
  const { audience } = useParams<{ audience: string }>()
  const products = PRODUCTS.filter((p) => p.isNew && p.audience === audience)
  const label = (audience && LABELS[audience]) ?? 'New Arrivals'

  return (
    <main className="category-page">
      <div className="category-page__header">
        <h1>{label}</h1>
      </div>
      <ProductGrid products={products} />
    </main>
  )
}