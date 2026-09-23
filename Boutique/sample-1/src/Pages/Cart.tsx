// Pages/Cart.tsx
import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <main className="cart cart--empty">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/collections" className="btn btn-primary">
          Continue Shopping
        </Link>
      </main>
    )
  }

  return (
    <main className="cart">
      <h1>Your Cart</h1>

      <div className="cart__layout">
        <div className="cart__items">
          {items.map((item) => (
            <div key={`${item.productId}-${item.size}`} className="cart__item">
              <img src={item.image} alt={item.name} />
              <div className="cart__item-info">
                <span className="cart__item-name">{item.name}</span>
                <span className="cart__item-size">Size: {item.size}</span>
                <span className="cart__item-price">${item.price}</span>
              </div>
              <div className="cart__item-stepper">
                <button
                  onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span>{item.quantity}</span>
                <button
                  className="cart__item-stepper-btn"
                  onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                className="cart__item-remove"
                onClick={() => removeFromCart(item.productId, item.size)}
                aria-label="Remove item"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="cart__summary">
          <div className="cart__summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <p className="cart__summary-note">Shipping and taxes calculated at checkout.</p>
          <Link to="/checkout" className="btn btn-primary cart__checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </main>
  )
}