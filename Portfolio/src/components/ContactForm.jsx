import React, { useState } from "react";
import { portfolioData } from "../data.js";

// ─────────────────────────────────────────────────────────────
//  Google Form config — replace the entry IDs below with the
//  actual values from your Google Form (run in browser console):
//  [...new Set(document.documentElement.innerHTML.match(/entry\.\d+/g))]
// ─────────────────────────────────────────────────────────────
const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSenwvXWVqTU2hN_BDJBW0SHrPPdJUh60jSW30N-5H3bOhmV9g/formResponse";

const FIELD_IDS = {
  name: "entry.660113238",
  email: "entry.1672134303",
  message: "entry.1691957463",
};
// ─────────────────────────────────────────────────────────────

export default function ContactForm({ onClose }) {
  const data = portfolioData.contact_zone;
  const dev = portfolioData.developer_info;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSend = async (e) => {
    e.preventDefault();
    setSending(true);

    // Build form data payload for Google Forms
    const body = new FormData();
    body.append(FIELD_IDS.name, form.name);
    body.append(FIELD_IDS.email, form.email);
    body.append(FIELD_IDS.message, form.message);

    try {
      // Google Forms doesn't allow CORS POST from fetch, so we use a
      // hidden iframe trick — the POST succeeds silently in the background.
      await submitViaIframe(body);
    } catch (_) {
      // Even on network error we show success (form likely went through)
    }

    setSending(false);
    setSent(true);
    setTimeout(onClose, 2800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

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
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={sending}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={sending}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              disabled={sending}
            />
            <button type="submit" className="btn-submit" disabled={sending}>
              {sending ? "⏳ Sending…" : "🚀 Send Message"}
            </button>
          </form>
        )}

        <div className="social-links" style={{ marginTop: "1.5rem" }}>
          <a
            href={dev.social_links.github}
            target="_blank"
            rel="noreferrer"
            className="btn-social"
          >
            GitHub
          </a>
          <a
            href={dev.social_links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-social btn-linkedin"
          >
            LinkedIn
          </a>
        </div>

        {/* Hidden iframe used to submit to Google Forms without CORS error */}
        <iframe
          name="gform-hidden-target"
          style={{ display: "none" }}
          title="form-submit"
        />
      </div>
    </div>
  );
}

/** Submit Google Form via hidden iframe (bypasses CORS restriction) */
function submitViaIframe(formData) {
  return new Promise((resolve) => {
    const iframe = document.querySelector('iframe[name="gform-hidden-target"]');

    // Build and auto-submit a temporary form targeting the hidden iframe
    const tempForm = document.createElement("form");
    tempForm.method = "POST";
    tempForm.action = FORM_ACTION;
    tempForm.target = "gform-hidden-target";
    tempForm.style.display = "none";

    for (const [key, value] of formData.entries()) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    }

    document.body.appendChild(tempForm);
    tempForm.submit();
    document.body.removeChild(tempForm);

    // Resolve after a short delay (form posts in background)
    setTimeout(resolve, 1000);
  });
}
