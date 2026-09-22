// Layout/Footer.tsx
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { Newsletter } from '../Components/Newsletter'

const SHOP_LINKS = [
  { to: '/new-arrivals', label: 'New Arrivals' },
  { to: '/collections', label: 'Collections' },
  { to: '/sale', label: 'Sale' },
]

const HELP_LINKS = [
  { to: '/returns', label: 'Returns' },
  { to: '/contact', label: 'Contact' },
]

const COMPANY_LINKS = [{ to: '/about', label: 'About' }]

const SOCIAL_LINKS = [
  { href: 'https://facebook.com', label: 'Facebook', Icon: FaFacebookF },
  { href: 'https://twitter.com', label: 'Twitter', Icon: FaXTwitter },
  { href: 'https://instagram.com', label: 'Instagram', Icon: FaInstagram },
]

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__newsletter">
        <Newsletter />
      </div>

      <div className="site-footer__main">
        <div className="site-footer__brand">
          <img src="/logo.png" alt="My Boutique" className="site-footer__logo" />
          <div className="site-footer__socials">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__column">
          <span className="site-footer__heading">Shop</span>
          <ul>
            {SHOP_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column">
          <span className="site-footer__heading">Help</span>
          <ul>
            {HELP_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column">
          <span className="site-footer__heading">Company</span>
          <ul>
            {COMPANY_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} My Boutique. All rights reserved.</span>
      </div>
    </footer>
  )
}