'use client';

export default function WhatsAppButton() {
  const phoneNumber = '918719071209';
  const message = encodeURIComponent(
    'Hello Webleora, I would like to inquire about your website and digital solutions.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <aside aria-label="Contact via WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wl-whatsapp-float"
        aria-label="Chat with Webleora on WhatsApp"
      >
        <div className="wl-whatsapp-icon-wrap">
          <svg
            className="wl-whatsapp-svg"
            viewBox="0 0 175.216 175.552"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill="#25D366"
              d="M87.608 0C39.227 0 0 39.227 0 87.608c0 15.467 4.029 30.569 11.677 43.834L.198 175.552l45.24-11.865c12.753 6.953 27.126 10.619 42.17 10.619 48.381 0 87.608-39.227 87.608-87.608S135.989 0 87.608 0z"
            />
            <path
              fill="#FFFFFF"
              d="M134.426 122.996c-1.921 5.419-9.529 9.941-15.65 11.238-4.195.89-9.667 1.584-28.188-6.096-23.694-9.824-38.995-33.82-40.177-35.395-1.182-1.575-9.646-12.835-9.646-24.483 0-11.648 6.096-17.381 8.261-19.745 2.165-2.364 4.724-2.955 6.3-2.955 1.575 0 3.15.02 4.527.089 1.457.069 3.406-.551 5.327 4.049 1.98 4.744 6.791 16.574 7.382 17.756.591 1.182.984 2.56.197 4.134-.787 1.575-1.182 2.56-2.364 3.937-1.182 1.378-2.48 3.071-3.543 4.134-1.182 1.182-2.421 2.48-1.043 4.842 1.378 2.364 6.136 10.138 13.17 16.398 9.055 8.051 16.693 10.551 19.057 11.733 2.364 1.182 3.74-.197 5.118-1.575 1.378-1.378 5.906-6.889 7.48-9.252 1.575-2.364 3.15-1.969 5.315-1.182 2.165.787 13.78 6.496 16.142 7.677 2.364 1.182 3.937 1.772 4.527 2.756.591.984.591 5.709-1.33 11.128z"
            />
          </svg>
        </div>
        <span className="wl-whatsapp-label">Chat with Us!</span>
      </a>
    </aside>
  );
}

