import React, { useState } from 'react';
import { portfolioData } from '../data.js';

export default function ContactForm({ onClose }) {
  const data = portfolioData.contact_zone;
  const dev  = portfolioData.developer_info;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSend = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(onClose, 2500);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content contact-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>

        <h2>🏰 Contact Me</h2>
        <p className="about-bio">{data.message_prompt}</p>

        <div className="email-display">
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>

        {sent ? (
          <div className="success-msg">
            ✅ Message sent! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSend} className="contact-form">
            <input
              type="text" name="name" placeholder="Your Name"
              value={form.name} onChange={handleChange} required
            />
            <input
              type="email" name="email" placeholder="Your Email"
              value={form.email} onChange={handleChange} required
            />
            <textarea
              name="message" placeholder="Your Message" rows="4"
              value={form.message} onChange={handleChange} required
            />
            <button type="submit" className="btn-submit">🚀 Send Message</button>
          </form>
        )}

        <div className="social-links" style={{ marginTop: '1.5rem' }}>
          <a href={dev.social_links.github}   target="_blank" rel="noreferrer" className="btn-social">GitHub</a>
          <a href={dev.social_links.linkedin} target="_blank" rel="noreferrer" className="btn-social btn-linkedin">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
