import { useEffect, useRef, useState } from 'react';

export default function MauticModal({ isOpen, onClose, title = 'Get the Download Link', description = "We'll send FreePlay download instructions right to your inbox." }) {
  const formContainerRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    setSubmitted(false);
    setLoading(true);
    document.body.style.overflow = 'hidden';

    // Load Mautic form
    const loadForm = () => {
      if (!formContainerRef.current) return;
      formContainerRef.current.innerHTML = '';

      const script = document.createElement('script');
      script.src = 'https://mautic.churchapps.org/form/generate.js?id=6';
      script.onload = () => {
        setLoading(false);
        // Style the form after it loads
        setTimeout(styleMauticForm, 500);
      };
      formContainerRef.current.appendChild(script);

      // Fallback: load SDK manually
      if (typeof window.MauticSDKLoaded === 'undefined') {
        window.MauticSDKLoaded = true;
        window.MauticDomain = 'https://mautic.churchapps.org';
        window.MauticLang = { submittingMessage: 'Please wait...' };
        const sdk = document.createElement('script');
        sdk.src = 'https://mautic.churchapps.org/media/js/mautic-form.js?v=' + Date.now();
        sdk.onload = () => { if (window.MauticSDK) window.MauticSDK.onLoad(); };
        document.head.appendChild(sdk);
      }
    };

    loadForm();

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const styleMauticForm = () => {
    const wrapper = formContainerRef.current;
    if (!wrapper) return;

    // Style inputs
    wrapper.querySelectorAll('input.mauticform-input, select.mauticform-input, textarea.mauticform-input').forEach(el => {
      el.style.cssText = 'width:100%;padding:10px 14px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.25);border-radius:8px;color:#fff;font-size:1rem;box-sizing:border-box;font-family:inherit;outline:none;';
      el.addEventListener('focus', () => { el.style.borderColor = '#ec008c'; });
      el.addEventListener('blur', () => { el.style.borderColor = 'rgba(255,255,255,0.25)'; });
    });

    // Style labels — left-aligned, add asterisk for required
    wrapper.querySelectorAll('.mauticform-label').forEach(el => {
      el.style.cssText = 'color:rgba(255,255,255,0.9);font-size:0.9rem;font-weight:500;margin-bottom:6px;display:block;text-align:left;';
    });

    // Add asterisk to required labels
    wrapper.querySelectorAll('.mauticform-row.mauticform-required .mauticform-label').forEach(el => {
      if (!el.textContent.includes('*')) el.textContent += '*';
    });

    // Hide "This is required" error messages by default
    wrapper.querySelectorAll('.mauticform-errormsg').forEach(el => {
      el.style.display = 'none';
    });

    // Style submit button
    wrapper.querySelectorAll('.mauticform-button, button.mauticform-button').forEach(el => {
      el.style.cssText = 'width:100%;padding:14px 32px;background:#ec008c;color:#fff;border:none;border-radius:9999px;font-size:1rem;font-weight:600;cursor:pointer;margin-top:12px;font-family:inherit;transition:background 0.2s;';
      el.addEventListener('mouseenter', () => { el.style.background = '#ff1a9e'; });
      el.addEventListener('mouseleave', () => { el.style.background = '#ec008c'; });
    });

    // Style rows — tighter spacing
    wrapper.querySelectorAll('.mauticform-row').forEach(el => {
      el.style.marginBottom = '8px';
    });

    // Hide the Mautic form wrapper default styles
    const mauticStyle = wrapper.querySelector('style');
    if (mauticStyle) mauticStyle.remove();

    // Fade in now that styling is done
    wrapper.style.opacity = '1';

    // Intercept form submission for conversion tracking
    const form = wrapper.querySelector('form');
    if (form) {
      form.addEventListener('submit', () => {
        // Fire Google Ads conversion
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-3663262160/7530754023',
            'value': 25.0,
            'currency': 'USD'
          });
          console.log('✅ FreePlay signup conversion tracked!');
        }
        // Show success after delay
        setTimeout(() => setSubmitted(true), 1500);
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content hubspot-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>×</button>
        <div className="modal-icon">✉️</div>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-text">{description}</p>
        {submitted ? (
          <p style={{ color: 'white', textAlign: 'center', fontSize: '1.1rem', padding: '20px 0' }}>
            Thanks! Check your inbox for the download link.
          </p>
        ) : (
          <>
            {loading && <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>Loading form...</p>}
            <div ref={formContainerRef} style={{ opacity: 0, transition: 'opacity 0.3s' }} />
          </>
        )}
      </div>
    </div>
  );
}
