// Visual dual-screen theme mockup rendered inside the browser card frame.
// Mirrors each live Vercel wedding theme's authentic palette, entrance reveal, and bilingual typography cleanly without relying on external hotlinks.

export default function WeddingThemePreview({ theme }) {
  const { preview, liveUrl, title } = theme;
  const subSurface = preview.isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.72)';
  const chipBg = preview.isDark ? 'rgba(212, 175, 55, 0.14)' : 'rgba(110, 31, 47, 0.07)';
  const borderTint = preview.isDark ? 'rgba(212, 175, 55, 0.35)' : 'rgba(201, 162, 75, 0.42)';

  return (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wl-theme-preview-stage"
      style={{ background: preview.bgGradient }}
      aria-label={`Open live preview of ${title}`}
    >
      {/* Ornamental double frame border inside stage */}
      <div className="wl-theme-ornament-frame" style={{ borderColor: borderTint }} />

      {/* Top reveal pill + motif */}
      <div className="wl-theme-stage-content">
        <span
          className="wl-theme-motif-pill"
          style={{
            background: preview.accentBg,
            color: preview.isDark ? '#16020A' : '#fffcf8',
            borderColor: preview.accentGold,
          }}
        >
          <i className={preview.iconClass} aria-hidden="true" />
          <span>{preview.motif}</span>
        </span>

        <div
          className="wl-theme-invocation"
          style={{ color: preview.isDark ? preview.accentGold : preview.headingColor }}
        >
          {preview.invocation}
        </div>

        <h4 className="wl-theme-couple-name" style={{ color: preview.headingColor }}>
          {preview.couple}
        </h4>

        <div className="wl-theme-date-sub" style={{ color: preview.textColor }}>
          {preview.dateLabel}
        </div>

        {/* Mini Live Countdown Strip */}
        <div className="wl-theme-mini-countdown">
          {preview.countdown.map((unit) => (
            <span
              key={unit}
              style={{
                background: subSurface,
                borderColor: borderTint,
                color: preview.headingColor,
              }}
            >
              {unit}
            </span>
          ))}
        </div>

        {/* Color Swatch Strip */}
        <div
          className="wl-theme-mini-footer"
          style={{ background: chipBg, borderColor: borderTint, color: preview.textColor }}
        >
          <i className="fa-solid fa-music" style={{ color: preview.accentGold }} aria-hidden="true" />
          <span>Interactive Reveal · Maps · Itinerary</span>
        </div>
      </div>

      {/* Hover CTA Overlay (matches existing wl-web-portfolio-card pattern) */}
      <div className="wl-web-card-img-overlay">
        <span className="wl-web-view-badge">
          <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /> Launch Live Wedding Demo
        </span>
      </div>
    </a>
  );
}
