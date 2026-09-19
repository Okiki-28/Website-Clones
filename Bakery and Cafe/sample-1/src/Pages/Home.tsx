import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Bakery display",
    caption: "Fresh from the oven, every morning",
    ctaText: "View Menu",
    ctaLink: "/menu",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Cafe interior",
    caption: "A warm space to sit, sip, and stay a while",
    ctaText: "Visit Us",
    ctaLink: "/contact",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Coffee cup",
    caption: "Brewed with care, cup after cup",
    ctaText: "Explore Our Coffee",
    ctaLink: "/menu#coffee",
  },
  {
    src: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Fresh bread",
    caption: "Traditional recipes, baked the old-fashioned way",
    ctaText: "Our Story",
    ctaLink: "/about",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Bakery pastries",
    caption: "Buttery, flaky, and always made fresh",
    ctaText: "View Pastries",
    ctaLink: "/menu#pastries",
  },
  {
    src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Donuts",
    caption: "A little sweetness for your day",
    ctaText: "See What's Fresh",
    ctaLink: "/menu",
  },
  {
    src: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Bakery bread loaves",
    caption: "Handcrafted loaves, made from scratch",
    ctaText: "Discover Our Breads",
    ctaLink: "/menu#bread",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Coffee top view",
    caption: "The perfect pairing to any pastry",
    ctaText: "View Menu",
    ctaLink: "/menu",
  },
  {
    src: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Coffee beans",
    caption: "Ethically sourced beans, roasted with intention",
    ctaText: "Learn More",
    ctaLink: "/about#coffee",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Coffee shop interior",
    caption: "Come as a stranger, leave as a regular",
    ctaText: "Find Us",
    ctaLink: "/contact",
  },
];


const reviews = [
  {
    name: "Sarah M.",
    text: "From the moment you walk in, the warmth just hits you. The lighting, the smell of fresh bread, the little details everywhere — it genuinely feels like stepping into somewhere special. It's become my favorite spot to unwind after a long day.",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    alt: "Warm, cozy cafe interior",
  },
  {
    name: "David R.",
    text: "I've been coming here every week for almost three years now. Their pastries never disappoint — the croissants are always flaky, the coffee is always perfect. Once you find your favorite, you just keep coming back for more.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    alt: "Coffee beside fresh pastries",
  },
  {
    name: "Amaka O.",
    text: "What stands out most to me is how friendly everyone is. The staff remember your name, remember your order, and somehow make you feel like part of the family within your first few visits. It's so easy to strike up a conversation with someone new here.",
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    alt: "Friendly cafe seating area",
  },
];

export const Home = () => {
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <div className="hero">
        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div className="carousel-item" key={i}>
                <img src={img.src} alt={img.alt} />
                
                <div className="carousel-caption">
                  <p>{img.caption}</p>
                  <div className="cta">
                    <Link to={img.ctaLink}>
                      {img.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn prev" onClick={goPrev} aria-label="Previous image">
            &#8249;
          </button>
          <button className="carousel-btn next" onClick={goNext} aria-label="Next image">
            &#8250;
          </button>

          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hero-text">
          <h1>Welcome to Our Bakery and Cafe</h1>
          <span className="divider"></span>
          <p>
            We are a family-owned bakery and cafe that has been serving our
            community for over 20 years. Our passion is creating delicious
            baked goods and beverages that bring joy to our customers. We use
            only the finest ingredients and traditional baking techniques to
            ensure that every item we make is of the highest quality. Thank
            you for supporting our business, and we look forward to serving
            you!
          </p>
        </div>

        <div className="cta">
          <a href="/menu">View Our Menu</a>
        </div>
      </div>

      <section className="reviews">
        <h2>What Our Customers Think</h2>
        <span className="divider"></span>

        {reviews.map((review, i) => (
          <div
            className={`review-item ${i % 2 === 1 ? "reverse" : ""}`}
            key={i}
          >
            <div className="review-image">
              <img src={review.img} alt={review.alt} />
            </div>
            <div className="review-text">
              <p>"{review.text}"</p>
              <span className="review-name">— {review.name}</span>
            </div>
          </div>
        ))}

        <div className="cta">
          <a href="/contact">Come Visit Us</a>
        </div>
      </section>
      <section className="visit-info">
        <div className="visit-card">
          <h3>Hours</h3>
          <ul>
            <li><span>Mon – Fri</span><span>7:00am – 6:00pm</span></li>
            <li><span>Sat – Sun</span><span>8:00am – 4:00pm</span></li>
          </ul>
        </div>

        <div className="visit-divider"></div>

        <div className="visit-card">
          <h3>Location</h3>
          <p>123 Maple Street<br />Halstead, Essex, CO9 2AB</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="visit-link">
            Get Directions →
          </a>
        </div>

        <div className="visit-divider"></div>

        <div className="visit-card">
          <h3>Contact</h3>
          <p>(01787) 123 456</p>
          <a href="mailto:hello@bakeryandcafe.com" className="visit-link">
            hello@bakeryandcafe.com
          </a>
        </div>
      </section>
    </main>
  );
};