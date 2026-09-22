// Pages/Contact.tsx
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const SHOP_LAT = 51.5162249
const SHOP_LNG = -0.1499442

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: wire up to actual form handler / email service
    setSubmitted(true)
  }

  return (
    <main className="contact">
      <div className="contact__header">
        <h1>Get in Touch</h1>
        <p>Questions about an order, a return, or just want to say hi.</p>
      </div>

      <div className="contact__layout">
        <div className="contact__form-panel">
          {submitted ? (
            <p className="contact__confirm">Thanks — we'll get back to you shortly.</p>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" required />
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} required />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="contact__info-panel">
          <div className="contact__info-item">
            <MapPin size={18} strokeWidth={1.75} />
            <div>
              <span className="contact__info-label">Visit Us</span>
              <span>14 Marylebone Lane, London W1U 2NT</span>
            </div>
          </div>

          <div className="contact__info-item">
            <Clock size={18} strokeWidth={1.75} />
            <div>
              <span className="contact__info-label">Hours</span>
              <span>Mon–Sat, 10am–6pm</span>
            </div>
          </div>

          <div className="contact__info-item">
            <Mail size={18} strokeWidth={1.75} />
            <div>
              <span className="contact__info-label">Email</span>
              <span>hello@myboutique.com</span>
            </div>
          </div>

          <div className="contact__info-item">
            <Phone size={18} strokeWidth={1.75} />
            <div>
              <span className="contact__info-label">Phone</span>
              <span>+44 20 7946 0958</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact__map">
        <iframe
          title="My Boutique location"
          src={`https://www.google.com/maps?q=${SHOP_LAT},${SHOP_LNG}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  )
}