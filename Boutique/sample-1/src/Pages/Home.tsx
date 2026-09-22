// pages/Home.tsx
import { HeroCarousel } from '../Components/HeroCarousel'
import { EditorialCard } from '../Components/EditorialCard'
import { BestSellers } from '../Components/BestSellers'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <main className="home">
      <HeroCarousel />

      <section className="category-grid">
        <Link to="/new-arrivals" className="category-card">
          <img
            src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=900&auto=format&fit=crop&q=80"
            alt="New arrivals"
          />
          <span>New Arrivals</span>
        </Link>
        <Link to="/collections" className="category-card">
          <img
            src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=900&auto=format&fit=crop&q=80"
            alt="Collections"
          />
          <span>Collections</span>
        </Link>
        <Link to="/sale" className="category-card">
          <img
            src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=900&auto=format&fit=crop&q=80"
            alt="Sale"
          />
          <span>Sale</span>
        </Link>
      </section>

      <section className="editorial-split">
        <EditorialCard
          image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80"
          alt="Inside the boutique"
          tag="In Store"
          caption="Take a look inside"
          to="/about"
        />
        <EditorialCard
          image="https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=1200&auto=format&fit=crop&q=80"
          alt="Storefront window"
          tag="Womenswear"
          caption="Shop the edit"
          to="/collections"
        />
      </section>

      <BestSellers />
    </main>
  )
}