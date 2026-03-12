import { useEffect, useRef } from 'react';

export default function HubSpotModal({ isOpen, onClose, title = 'Get the Download Link', description = "We'll send FreePlay download instructions right to your inbox." }) {
  const formContainerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    // Listen for HubSpot form submissions and fire Google Ads conversion
    const handleFormSubmission = (event) => {
      if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
        // Fire Google Ads conversion
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-3663262160/7530754023',
            'value': 25.0,
            'currency': 'USD'
          });
          console.log('✅ FreePlay signup conversion tracked!');
        }
      }
    };

    window.addEventListener('message', handleFormSubmission);

    const createForm = () => {
      if (window.hbspt && formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '20077299',
          formId: '68eef80a-1d82-4957-9f2d-6f02873642fd',
          target: '#hs-email-form-container',
          css: '',
          cssRequired: '',
          inlineMessage: '<p style="color:white;text-align:center;font-size:1.1rem;">Thanks! Check your inbox for the download link.</p>',
          onFormReady: function() {
            const iframe = document.querySelector('#hs-email-form-container iframe');
            if (iframe) {
              const style = iframe.contentDocument.createElement('style');
              style.textContent = `
                body { background: transparent !important; font-family: inherit; }
                .hs-form-field label { color: rgba(255,255,255,0.9) !important; font-size: 0.9rem !important; font-weight: 500 !important; margin-bottom: 4px; display: block; }
                input[type="text"], input[type="email"], input[type="tel"], input[type="number"], select, textarea {
                  width: 100% !important; padding: 10px 14px !important;
                  background: rgba(255,255,255,0.1) !important;
                  border: 1px solid rgba(255,255,255,0.35) !important;
                  border-radius: 8px !important; color: #fff !important;
                  font-size: 1rem !important; box-sizing: border-box !important;
                }
                input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.4) !important; }
                input[type="text"]:focus, input[type="email"]:focus { outline: none !important; border-color: #ec008c !important; }
                input[type="submit"], .hs-button {
                  width: 100% !important; padding: 12px 32px !important;
                  background: #ec008c !important; color: #fff !important;
                  border: none !important; border-radius: 9999px !important;
                  font-size: 1rem !important; font-weight: 600 !important;
                  cursor: pointer !important; margin-top: 8px !important;
                }
                input[type="submit"]:hover, .hs-button:hover { background: #ff1a9e !important; }
                .hs-error-msgs, .hs-error-msgs li { color: #ff6b8a !important; font-size: 0.8rem !important; list-style: none !important; padding: 0 !important; margin: 4px 0 0 !important; }
                .submitted-message, .submitted-message p { color: #fff !important; text-align: center !important; font-size: 1.1rem !important; }
                fieldset { border: none !important; padding: 0 !important; max-width: 100% !important; }
              `;
              iframe.contentDocument.head.appendChild(style);
            }
          },
        });
      }
    };

    if (window.hbspt) {
      createForm();
    } else {
      const existing = document.querySelector('script[src*="hsforms.net"]');
      if (existing) {
        existing.addEventListener('load', createForm);
      } else {
        const script = document.createElement('script');
        script.charset = 'utf-8';
        script.type = 'text/javascript';
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        script.onload = createForm;
        document.head.appendChild(script);
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('message', handleFormSubmission);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content hubspot-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>×</button>
        <div className="modal-icon">✉️</div>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-text">{description}</p>
        <div id="hs-email-form-container" ref={formContainerRef} className="hs-form-wrapper" />
      </div>
    </div>
  );
}
