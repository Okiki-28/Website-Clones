import { useState } from "react";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <span className="divider"></span>
        <p>
          Questions, feedback, or a catering enquiry — we'd love to hear from
          you. Reach us using the details below, send a message through the
          form, or come and see us in person.
        </p>
      </section>

      <section className="visit-info">
        <div className="visit-card">
          <h3>Hours</h3>
          <ul>
            <li><span>Mon – Fri</span><span>7:00am – 6:00pm</span></li>
            <li><span>Sat – Sun</span><span>8:00am – 4:00pm</span></li>
          </ul>
        </div>

        <div className="visit-divider"></div>

        <div className="visit-card">
          <h3>Location</h3>
          <p>123 Maple Street<br />Halstead, Essex, CO9 2AB</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="visit-link">
            Get Directions →
          </a>
        </div>

        <div className="visit-divider"></div>

        <div className="visit-card">
          <h3>Contact</h3>
          <p>(01787) 123 456</p>
          <a href="mailto:hello@bakeryandcafe.com" className="visit-link">
            hello@bakeryandcafe.com
          </a>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <span className="divider"></span>

        {submitted ? (
          <p className="form-success">
            Thanks for reaching out — we'll get back to you shortly!
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>

            <button type="submit" className="form-submit cta">
              Send Message
            </button>
          </form>
        )}
      </section>

      <section className="find-us">
        <h2>Find Us</h2>
        <span className="divider"></span>
        <p>
          Drop by and say hello — here's a map to help you find your way.
        </p>
        <div className="map-frame">
          <iframe
            title="Find us on the map"
            src="https://www.google.com/maps?q=Anglia+Ruskin+University,+Chelmsford&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};