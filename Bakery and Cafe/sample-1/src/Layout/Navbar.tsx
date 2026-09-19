import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
  <div className="top-bar">
    <div className="announcement">
      <p>Free shipping on orders over $50!</p>
    </div>
    <nav>
      <div className="nav-logo">
        <img src="/logo.png" alt="Logo" />
        <Link to="/"><h1>Bakery & Cafe</h1></Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>  
  </div>
  )
}