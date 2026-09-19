export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Bakery & Cafe</h2>
          <p>Baked with love, served with warmth.</p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-hours">
          <h3>Hours</h3>
          <p>Mon–Fri: 7am – 6pm</p>
          <p>Sat–Sun: 8am – 4pm</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bakery & Cafe. All rights reserved.</p>
      </div>
    </footer>
  );
};