// Layout/Navbar.tsx
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface NavItem {
  to: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/new-arrivals', label: 'New Arrivals' },
  { to: '/collections', label: 'Collections' },
  { to: '/sale', label: 'Sale' },
  { to: '/returns', label: 'Returns' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

// desktop dropdown data stays separate — mobile no longer needs it
const DROPDOWN_CHILDREN: Record<string, { to: string; label: string }[]> = {
  '/new-arrivals': [
    { to: '/new-arrivals/women', label: 'Women' },
    { to: '/new-arrivals/men', label: 'Men' },
  ],
  '/collections': [
    { to: '/collections/dresses', label: 'Dresses' },
    { to: '/collections/outerwear', label: 'Outerwear' },
    { to: '/collections/knitwear', label: 'Knitwear' },
    { to: '/collections/accessories', label: 'Accessories' },
  ],
}

const SOCIAL_LINKS = [
  { href: 'https://facebook.com', label: 'Facebook', Icon: FaFacebookF },
  { href: 'https://twitter.com', label: 'Twitter', Icon: FaXTwitter },
  { href: 'https://instagram.com', label: 'Instagram', Icon: FaInstagram },
]

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount } = useCart()

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) closeMenu()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="navbar-wrap">
      <div className="announcement">Free shipping on orders over $100</div>

      <div className="navbar">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src="/logo.png" alt="My Boutique" />
        </Link>

        {/* ---- Desktop nav (unchanged, still has hover dropdowns) ---- */}
        <nav className="navbar__nav navbar__nav--desktop">
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

                {DROPDOWN_CHILDREN[item.to] && (
                  <div className="navbar__dropdown">
                    <ul>
                      {DROPDOWN_CHILDREN[item.to].map((child) => (
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

        <div className="navbar__right">
          <div className="navbar__socials navbar__socials--desktop">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={16} />
              </a>
            ))}
          </div>

          <Link to="/cart" className="navbar__cart" aria-label="Cart" onClick={closeMenu}>
            <ShoppingBag size={20} strokeWidth={1.75} />
            {itemCount > 0 && <span className="navbar__cart-badge">{itemCount}</span>}
          </Link>

          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={closeMenu} />}

      {/* ---- Mobile panel — flat list, headings only ---- */}
      <nav className={`navbar__mobile ${menuOpen ? 'is-open' : ''}`}>
        <ul className="navbar__mobile-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="navbar__mobile-item">
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) => `navbar__mobile-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar__socials navbar__socials--mobile">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}