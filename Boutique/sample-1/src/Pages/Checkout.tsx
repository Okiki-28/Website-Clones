// Pages/Checkout.tsx
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export const Checkout = () => {
  const { items, subtotal, clearCart } = useCart()
  const [placed, setPlaced] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <main className="checkout checkout--confirmation">
        <h1>Thank you</h1>
        <p>Your (demo) order has been placed. No real payment was processed.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className="checkout checkout--empty">
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
        <Link to="/collections" className="btn btn-primary">
          Continue Shopping
        </Link>
      </main>
    )
  }

  return (
    <main className="checkout">
      <h1>Checkout</h1>

      <div className="checkout__layout">
        <form className="checkout__form" onSubmit={handleSubmit}>
          <h2>Shipping</h2>
          <div className="checkout__field">
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" required />
          </div>
          <div className="checkout__field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required />
          </div>
          <div className="checkout__field">
            <label htmlFor="address">Address</label>
            <input id="address" type="text" required />
          </div>
          <div className="checkout__row">
            <div className="checkout__field">
              <label htmlFor="city">City</label>
              <input id="city" type="text" required />
            </div>
            <div className="checkout__field">
              <label htmlFor="postcode">Postcode</label>
              <input id="postcode" type="text" required />
            </div>
          </div>

          <h2>Payment</h2>
          <p className="checkout__demo-note">Demo checkout — no real payment is processed.</p>
          <div className="checkout__field">
            <label htmlFor="cardNumber">Card Number</label>
            <input id="cardNumber" type="text" placeholder="4242 4242 4242 4242" required />
          </div>
          <div className="checkout__row">
            <div className="checkout__field">
              <label htmlFor="expiry">Expiry</label>
              <input id="expiry" type="text" placeholder="MM/YY" required />
            </div>
            <div className="checkout__field">
              <label htmlFor="cvc">CVC</label>
              <input id="cvc" type="text" placeholder="123" required />
            </div>
          </div>

          <button type="submit" className="btn btn-primary checkout__submit">
            Place Order — ${subtotal.toFixed(2)}
          </button>
        </form>

        <div className="checkout__summary">
          {items.map((item) => (
            <div key={`${item.productId}-${item.size}`} className="checkout__summary-item">
              <img src={item.image} alt={item.name} />
              <div>
                <span>{item.name}</span>
                <span className="checkout__summary-meta">
                  {item.size} · Qty {item.quantity}
                </span>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="checkout__summary-total">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </main>
  )
}