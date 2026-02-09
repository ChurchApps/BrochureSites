import { useEffect } from 'react';

export default function ComingSoonModal({ isOpen, onClose, platform }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>×</button>
        <div className="modal-icon">🚀</div>
        <h2 className="modal-title">Coming Soon!</h2>
        <p className="modal-text">
          FreePlay is coming to <span className="modal-highlight">{platform}</span> very soon!
        </p>
        <p className="modal-subtext">
          Currently only available on <span className="modal-highlight">Amazon Fire TV</span>. Check back later!
        </p>
        <button className="modal-button" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
}
