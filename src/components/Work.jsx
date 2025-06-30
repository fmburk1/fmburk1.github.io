import React, { useState } from "react";
import "./Work.css";
import ThreeDTiltCard from "./3DTiltCard";

import smLogo from "../assets/smartmieter.jpg";
import deloitteLogo from "../assets/deloitte.jpg";
import pdiLogo from "../assets/pdi.jpg";
import fmfLogo from "../assets/fmf.jpg";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import deloittepic from "../assets/deloittepic.jpg";
import fmfvideo from "../assets/FMFVideo.mov";
import zeugnis from "../assets/zeugnis.pdf";
import porscheZeugnis from "../assets/LoR_MaxBurk_2022.pdf";

export default function Work() {
  const { t } = useTranslation();

  /* ─── Expanded card state ───────────────────── */
  const [expanded, setExpanded] = useState(null); // {title, content} | null

  /* ─── Card data array ───────────────────────── */
  const cards = [
    {
      title: t("work.role1"),
      preview: t("work.body1"),
      content: t("work.expanded1"),
      logo: smLogo,
      link: "https://smartmieter.com",
      linkLabel: "smartmieter.com",
      dates: t("work.time"),
      tags: [
        "React",
        "OpenAI API",
        "Google Analytics",
        "Sales",
        t("work.example1"),
        t("work.example2"),
      ],
    },
    {
      title: t("work.role2"),
      preview: t("work.body2"),
      content: t("work.expanded2"),
      logo: deloitteLogo,
      dates: "2024",
      photo: deloittepic,
      tags: [
        "Python",
        "AI Models",
        "Microsoft Office Suite",
        "PowerBI/Tableau",
        t("work.example3"),
        t("work.example2"),
      ],
      pdf: zeugnis,
    },
    {
      title: t("work.role1"),
      preview: t("work.body3"),
      content: t("work.expanded3"),
      logo: fmfLogo,
      dates: "2023",
      video: fmfvideo,
      tags: [
        "React",
        "OpenAI API",
        "Google Analytics",
        "Sales",
        t("work.example1"),
        t("work.example2"),
      ],
    },
    {
      title: t("work.role3"),
      preview: t("work.body4"),
      content: t("work.expanded4"),
      logo: pdiLogo,
      dates: t("work.time4"),
      tags: [
        "Python",
        "AI Models",
        "Microsoft Office Suite",
        "Google Analytics",
        "Tableau",
        t("work.example3"),
        t("work.example2"),
      ],
      pdf: porscheZeugnis,
    },
  ];

  return (
    <section className="work-section">
      {/* ─── Expanded overlay ───────────────────── */}
      {expanded ? (
        <div className="card-overlay">
          <button className="back-button" onClick={() => setExpanded(null)}>
            ← {t("work.back")}
          </button>

          {expanded.logo && (
            <img
              src={expanded.logo}
              alt={expanded.title}
              className="overlay-logo"
            />
          )}

          <h2 className="overlay-title">{expanded.title}</h2>
          <div className="overlay-content">{expanded.content}</div>

          {expanded.video ? (
            <div className="overlay-video-wrapper">
              <video
                src={expanded.video}
                controls
                className="overlay-video"
                autoPlay={false}
                playsInline
              />
            </div>
          ) : expanded.photo ? (
            <div className="overlay-photo-wrapper">
              <img
                src={expanded.photo}
                alt="Project Visual"
                className="overlay-photo"
              />
            </div>
          ) : null}

          {expanded.link && (
            <div className="overlay-link-wrapper">
              <a
                href={expanded.link}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-link"
                onClick={(e) => e.stopPropagation()}
              >
                {expanded.linkLabel || "Visit Link"}
              </a>
            </div>
          )}
          {expanded.pdf && (
            <div className="overlay-download-wrapper">
              <a
                href={expanded.pdf}
                download
                className="overlay-download"
                onClick={(e) => e.stopPropagation()}
              >
                {expanded.pdfLabel || t("work.zeugnis")}
              </a>
            </div>
          )}
          {expanded.tags && expanded.tags.length > 0 && (
            <div className="overlay-tags">
              {expanded.tags.map((tag, idx) => (
                <span className="overlay-tag" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* ─── Grid / row of cards ───────────────── */
        <div className="card-row">
          {cards.map((card, i) => (
            <ThreeDTiltCard key={i} {...card} onExpand={setExpanded} />
          ))}
        </div>
      )}
    </section>
  );
}
