// Pages/CollectionsLanding.tsx
import { Link } from 'react-router-dom'

interface Category {
  slug: string
  label: string
  image: string
}

const CATEGORIES: Category[] = [
  {
    slug: 'dresses',
    label: 'Dresses',
    image: 'https://images.unsplash.com/photo-1612087057305-7e57f8d88e69?w=1000&auto=format&fit=crop&q=80',
  },
  {
    slug: 'outerwear',
    label: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=1000&auto=format&fit=crop&q=80',
  },
  {
    slug: 'knitwear',
    label: 'Knitwear',
    image: 'https://images.unsplash.com/photo-1758537698215-af1e35acb911?w=1000&auto=format&fit=crop&q=80',
  },
  {
    slug: 'accessories',
    label: 'Accessories',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&auto=format&fit=crop&q=80',
  },
]

export const CollectionsLanding = () => {
  return (
    <main className="collections-landing">
      <div className="collections-landing__header">
        <h1>Collections</h1>
      </div>

      <div className="collections-landing__grid">
        {CATEGORIES.map((category) => (
          <Link
            key={category.slug}
            to={`/collections/${category.slug}`}
            className="collections-landing__tile"
          >
            <img src={category.image} alt={category.label} />
            <span>{category.label}</span>
          </Link>
        ))}
      </div>
    </main>
  )
}