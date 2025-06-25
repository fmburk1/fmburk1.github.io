import React, { useRef, useEffect, useState } from "react";
import "./3DTiltCard.css";

export default function ThreeDTiltCard({
  title = "3D Tilt Card",
  preview = "This card tilts based on global mouse position",
  content = "Detailed content about this card goes here.",
}) {
  const cardRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) return; // ⛔ Skip tilt while expanded

    const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

    const handleMouseMove = (e) => {
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      const maxTilt = 15;

      const rotateX = clamp(
        (deltaY / (rect.height / 2)) * -maxTilt,
        -maxTilt,
        maxTilt
      );
      const rotateY = clamp(
        (deltaX / (rect.width / 2)) * maxTilt,
        -maxTilt,
        maxTilt
      );

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      card.style.boxShadow = `${-rotateY * 3}px ${
        rotateX * 3
      }px 30px rgba(0,0,0,0.3)`;
    };

    const handleMouseLeave = () => {
      const card = cardRef.current;
      card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      card.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isExpanded]);

  return (
    <>
      <div className="card-wrapper">
        <div className="card" ref={cardRef} onClick={() => setIsExpanded(true)}>
          <h3 className="card-title">{title}</h3>
          <p className="card-preview">{preview}</p>
          <button
            className="read-more-button"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(true);
            }}
          >
            Read More →
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="card-overlay">
          <div className="card-expanded-content">
            <button
              className="back-button"
              onClick={() => setIsExpanded(false)}
            >
              ← Back
            </button>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      )}
    </>
  );
}
