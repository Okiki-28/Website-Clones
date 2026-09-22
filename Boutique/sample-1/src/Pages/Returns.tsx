// Pages/Returns.tsx
import { Link } from 'react-router-dom'

const STEPS = [
  {
    number: '01',
    title: 'Start your return',
    text: 'Email us at returns@myboutique.com with your order number within 14 days of delivery.',
  },
  {
    number: '02',
    title: 'Pack it up',
    text: 'Items must be unworn, unwashed, and with tags attached. Original packaging preferred.',
  },
  {
    number: '03',
    title: 'Ship it back',
    text: "We'll send a prepaid return label. Drop the package at any courier location.",
  },
  {
    number: '04',
    title: 'Get refunded',
    text: 'Once received, refunds are processed within 5–7 business days to your original payment method.',
  },
]

export const Returns = () => {
  return (
    <main className="returns">
      <div className="returns__header">
        <h1>Returns &amp; Exchanges</h1>
        <p>
          Not quite right? You have 14 days from delivery to return or exchange
          any full-price item. Sale items are final sale.
        </p>
      </div>

      <div className="returns__steps">
        {STEPS.map((step) => (
          <div key={step.number} className="returns__step">
            <span className="returns__step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <div className="returns__cta">
        <p>Questions about a specific order?</p>
        <Link to="/contact" className="btn btn-secondary">
          Contact Us
        </Link>
      </div>
    </main>
  )
}