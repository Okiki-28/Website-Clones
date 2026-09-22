// Newsletter.tsx
import { useState } from 'react'
import type { FormEvent } from 'react'

export const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    // TODO: wire up to actual email provider
    setSubmitted(true)
  }

  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <h2>Stay in the loop</h2>
        <p>New arrivals and early access to sales.</p>

        {submitted ? (
          <p className="newsletter__confirm">You're on the list.</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  )
}