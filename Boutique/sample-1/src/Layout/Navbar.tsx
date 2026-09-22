// Navbar.tsx
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

const SOCIAL_LINKS = [
  { href: 'https://facebook.com', label: 'Facebook', Icon: FaFacebookF },
  { href: 'https://twitter.com', label: 'Twitter', Icon: FaXTwitter },
  { href: 'https://instagram.com', label: 'Instagram', Icon: FaInstagram },
]

interface SubLink {
  to: string
  label: string
}

interface NavItem {
  to: string
  label: string
  children?: SubLink[]
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home' },
  {
    to: '/new-arrivals',
    label: 'New Arrivals',
    children: [
      { to: '/new-arrivals/women', label: 'Women' },
      { to: '/new-arrivals/men', label: 'Men' },
    ],
  },
  {
    to: '/collections',
    label: 'Collections',
    children: [
      { to: '/collections/dresses', label: 'Dresses' },
      { to: '/collections/outerwear', label: 'Outerwear' },
      { to: '/collections/knitwear', label: 'Knitwear' },
      { to: '/collections/accessories', label: 'Accessories' },
    ],
  },
  { to: '/sale', label: 'Sale' },
  { to: '/returns', label: 'Returns' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const Navbar = () => {
  const { itemCount } = useCart()
  return (
    <header className="navbar-wrap">
      <div className="announcement">Free shipping on orders over $100</div>

      <div className="navbar">
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="Boutique logo" />
        </Link>

        <nav className="navbar__nav">
          <ul className="navbar__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.to} className="navbar__item">
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
                >
                  {item.label}
                </NavLink>

                {item.children && (
                  <div className="navbar__dropdown">
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link to={child.to}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__socials">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={18} strokeWidth={1.75} />
            </a>
          ))}
          <Link to="/cart" className="navbar__cart" aria-label="Cart">
            <ShoppingBag size={20} strokeWidth={1.75} />
            {itemCount > 0 && <span className="navbar__cart-badge">{itemCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  )
}