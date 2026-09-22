// Pages/About.tsx
import { Link } from 'react-router-dom'
import { Leaf, Scissors, Heart } from 'lucide-react'

const VALUES = [
  {
    Icon: Scissors,
    title: 'Considered craft',
    text: "Every piece is chosen for how it's made, not just how it looks.",
  },
  {
    Icon: Leaf,
    title: 'Small runs',
    text: 'We buy in limited quantities from a short list of makers we trust.',
  },
  {
    Icon: Heart,
    title: 'Made to last',
    text: 'Fewer, better pieces — built to hold up past a single season.',
  },
]

export const About = () => {
  return (
    <main className="about">
      {/* ---- Hero ---- */}
      <section className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1718985342149-7178154e0aee?w=1800&auto=format&fit=crop&q=80"
          alt="Inside the boutique"
        />
        <div className="about-hero__content">
          <h1>A small shop, carefully kept</h1>
        </div>
      </section>

      {/* ---- Story ---- */}
      <section className="about-story">
        <div className="about-story__image">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1000&auto=format&fit=crop&q=80"
            alt="Clothing rack in the boutique"
          />
        </div>
        <div className="about-story__text">
          <h2>Our Story</h2>
          <p>
            My Boutique started as a single rail of clothing in the back of a
            friend's café. What began as a weekend project grew, slowly and
            on purpose, into a shop built around pieces we'd actually want to
            wear — sourced in small batches, chosen with care, and meant to
            outlast a trend cycle.
          </p>
          <p>
            We're still small. That's deliberate — it's the only way we
            know how to keep paying attention to what we sell.
          </p>
        </div>
      </section>

      {/* ---- Values ---- */}
      <section className="about-values">
        {VALUES.map(({ Icon, title, text }) => (
          <div key={title} className="about-values__item">
            <Icon size={22} strokeWidth={1.5} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      {/* ---- Behind the scenes ---- */}
      <section className="about-gallery">
        <img
          src="https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=800&auto=format&fit=crop&q=80"
          alt="Inside the store"
        />
        <img
          src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&auto=format&fit=crop&q=80"
          alt="Clothing on display"
        />
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
          alt="Boutique interior"
        />
      </section>

      {/* ---- Closing CTA ---- */}
      <section className="about-cta">
        <img
          src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=1800&auto=format&fit=crop&q=80"
          alt="Storefront window"
        />
        <div className="about-cta__content">
          <p>See what we've picked out</p>
          <Link to="/collections" className="btn btn-outline-light">
            Shop Collections
          </Link>
        </div>
      </section>
    </main>
  )
}