// HeroCarousel.tsx
import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  image: string
  alt: string
  title: string
  cta: string
  to: string
}

const SLIDES: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1800&auto=format&fit=crop&q=80',
    alt: 'Clothing rack in the boutique',
    title: 'Quiet, considered clothing',
    cta: 'Shop New Arrivals',
    to: '/new-arrivals',
  },
  {
    image: 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?w=1800&auto=format&fit=crop&q=80',
    alt: 'Boutique interior',
    title: 'The Autumn Edit',
    cta: 'Explore Collections',
    to: '/collections',
  },
  {
    image: 'https://images.unsplash.com/photo-1718985342149-7178154e0aee?w=1800&auto=format&fit=crop&q=80',
    alt: 'Clothing and accessories on display',
    title: 'Finishing touches',
    cta: 'Shop Accessories',
    to: '/collections/accessories',
  },
]

const AUTOPLAY_MS = 5500

export const HeroCarousel = () => {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length)
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [next, index])

  return (
    <section className="hero-carousel">
      {SLIDES.map((slide, i) => (
        <div key={slide.to} className={`hero-carousel__slide ${i === index ? 'is-active' : ''}`}>
          <img src={slide.image} alt={slide.alt} />
          <div className="hero-carousel__content">
            <h1>{slide.title}</h1>
            <Link to={slide.to} className="btn btn-outline-light">
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      <button className="hero-carousel__arrow hero-carousel__arrow--prev" onClick={prev} aria-label="Previous slide">
        <ChevronLeft size={22} />
      </button>
      <button className="hero-carousel__arrow hero-carousel__arrow--next" onClick={next} aria-label="Next slide">
        <ChevronRight size={22} />
      </button>

      <div className="hero-carousel__dots">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.to}
            className={`hero-carousel__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}