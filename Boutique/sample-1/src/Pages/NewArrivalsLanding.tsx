// Pages/NewArrivalsLanding.tsx
import { Link } from 'react-router-dom'

const AUDIENCES = [
  {
    slug: 'women',
    label: 'Women',
    image: 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?w=1000&auto=format&fit=crop&q=80',
  },
  {
    slug: 'men',
    label: 'Men',
    image: 'https://images.unsplash.com/photo-1718985342149-7178154e0aee?w=1000&auto=format&fit=crop&q=80',
  },
]

export const NewArrivalsLanding = () => {
  return (
    <main className="collections-landing">
      <div className="collections-landing__header">
        <h1>New Arrivals</h1>
      </div>

      <div className="collections-landing__grid">
        {AUDIENCES.map((a) => (
          <Link key={a.slug} to={`/new-arrivals/${a.slug}`} className="collections-landing__tile">
            <img src={a.image} alt={a.label} />
            <span>{a.label}</span>
          </Link>
        ))}
      </div>
    </main>
  )
}