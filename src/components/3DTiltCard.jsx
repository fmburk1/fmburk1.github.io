import React, { useRef, useEffect } from "react";
import "./3DTiltCard.css";

export default function ThreeDTiltCard({
  title = "3D Tilt Card",
  preview = "This card tilts based on global mouse position",
  content = "Detailed content about this card goes here.",
  logo,
  logoAlt = "Card logo",
  link,
  linkLabel,
  dates,
  tags,
  photo,
  video,
  pdf,
  onExpand, // ⬅️ callback prop from parent
}) {
  const cardRef = useRef(null);

  /* ─── Tilt effect ───────────────────────────── */
  useEffect(() => {
    const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

    const handleMouseMove = (e) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const maxTilt = 15;

      const rx = clamp((-dy / (rect.height / 2)) * maxTilt, -maxTilt, maxTilt);
      const ry = clamp((dx / (rect.width / 2)) * maxTilt, -maxTilt, maxTilt);

      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
      card.style.boxShadow = `${-ry * 3}px ${rx * 3}px 30px rgba(0,0,0,0.3)`;
    };

    const reset = () => {
      const card = cardRef.current;
      if (card) {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  /* ─── Render ────────────────────────────────── */
  return (
    <div
      className="card-wrapper"
      onClick={() =>
        onExpand({
          title,
          content,
          logo,
          logoAlt,
          link,
          linkLabel,
          tags,
          photo,
          video,
          pdf,
        })
      }
    >
      <div className="card" ref={cardRef}>
        {dates && <div className="card-dates">{dates}</div>}

        {logo && (
          <img
            className="card-logo"
            src={logo}
            alt={logoAlt}
            aria-hidden="true"
          />
        )}

        <h3 className="card-title">{title}</h3>
        <p className="card-preview">{preview}</p>

        {link && (
          <div className="card-link-wrapper">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
              onClick={(e) => e.stopPropagation()}
            >
              {linkLabel || "Visit Link"}
            </a>
          </div>
        )}

        <button
          className="read-more-button"
          onClick={(e) => {
            e.stopPropagation();
            onExpand({
              title,
              content,
              logo,
              logoAlt,
              link,
              linkLabel,
              tags,
              photo,
              video,
              pdf,
            });
          }}
        >
          Read More →
        </button>
      </div>
    </div>
  );
}
