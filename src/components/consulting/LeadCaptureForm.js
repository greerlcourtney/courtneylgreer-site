import React, { useState, useRef, useEffect } from 'react';
import { track } from '@vercel/analytics';

const FORMSPREE_URL = process.env.REACT_APP_FORMSPREE_ENDPOINT;

function LeadCaptureForm({ utm }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const formStarted = useRef(false);

  // Track form abandonment on unmount
  useEffect(() => {
    return () => {
      if (formStarted.current && status !== 'success') {
        const filledFields = Object.values(formData).filter(Boolean).length;
        track('form_abandon', { filled_fields: filledFields });
      }
    };
  }, [formData, status]);

  const handleFocus = (field) => {
    if (!formStarted.current) {
      formStarted.current = true;
      track('form_start', { source: 'consulting' });
    }
    track('form_field_focus', { field });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    track('form_submit_attempt', { service: formData.service });

    if (!FORMSPREE_URL) {
      setStatus('error');
      track('form_submit_error', { service: formData.service, reason: 'no_endpoint' });
      return;
    }

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          _utm_source: utm?.source,
          _utm_medium: utm?.medium,
          _utm_campaign: utm?.campaign,
        }),
      });

      if (response.ok) {
        setStatus('success');
        track('form_submit_success', { service: formData.service });
        setFormData({ name: '', email: '', business: '', service: '', message: '' });
      } else {
        setStatus('error');
        track('form_submit_error', { service: formData.service });
      }
    } catch {
      setStatus('error');
      track('form_submit_error', { service: formData.service });
    }
  };

  return (
    <section className="consulting-form-section">
      <h2 className="text-reveal">Get Started</h2>
      <p className="consulting-form-lead fade-in">
        Tell us a bit about your business and we&apos;ll follow up within 48 hours.
      </p>

      {status === 'success' ? (
        <div className="consulting-form__success fade-in">
          <p>Thanks! We&apos;ll be in touch soon.</p>
        </div>
      ) : (
        <form className="consulting-form fade-in" onSubmit={handleSubmit}>
          <div className="consulting-form__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
            />
          </div>

          <div className="consulting-form__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
            />
          </div>

          <div className="consulting-form__field">
            <label htmlFor="business">Business</label>
            <input
              id="business"
              name="business"
              type="text"
              value={formData.business}
              onChange={handleChange}
              onFocus={() => handleFocus('business')}
            />
          </div>

          <div className="consulting-form__field">
            <label htmlFor="service">Service Interest</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              onFocus={() => handleFocus('service')}
            >
              <option value="">Select a service</option>
              <option value="discovery">Discovery (5 hrs)</option>
              <option value="setup">Setup (15 hrs)</option>
              <option value="full-integration">Full Integration (40 hrs)</option>
            </select>
          </div>

          <div className="consulting-form__field consulting-form__field--full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
            />
          </div>

          <button
            type="submit"
            className="consulting-form__submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending\u2026' : 'Send'}
          </button>

          {status === 'error' && (
            <p className="consulting-form__error">
              Something went wrong. Please try again or email us directly at{' '}
              <a href="mailto:team@wolfdevelopmentstudio.com">team@wolfdevelopmentstudio.com</a>.
            </p>
          )}
        </form>
      )}
    </section>
  );
}

export default LeadCaptureForm;
