import React from "react";
import "./Education.css";
import gradPhoto from "../assets/graduation.jpg";
import project1Image from "../assets/zulu.jpg";
import project2Image from "../assets/ucberkeley.jpg";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  return (
    <div className="education">
      <div className="education-grid">
        {/* ─── Left Sidebar ─── */}
        <aside className="edu-project">
          <img src={project2Image} alt="Project 2" className="project-image" />
          <h3>{t("education.title1")}</h3>
          <h5>{t("education.subtitle1")}</h5>
          <p>{t("education.body1")}</p>
          <h5>{t("education.subtitle2")}</h5>
          <p>{t("education.body2")}</p>
        </aside>

        {/* ─── Center Column: Image + Main Text ─── */}
        <div className="edu-center-column">
          <div className="grad-image-wrapper">
            <img src={gradPhoto} alt="Graduation" className="grad-image" />
          </div>
          <div className="edu-about-box">
            <p>{t("education.body3")}</p>
            <p>{t("education.body4")}</p>
          </div>
        </div>

        {/* ─── Right Sidebar ─── */}
        <aside className="edu-project">
          <h3>{t("education.title2")}</h3>
          <h5>{t("education.subtitle3")}</h5>
          <p>{t("education.body5")}</p>
          <img src={project1Image} alt="Project 1" className="project-image" />
          <h5>{t("education.subtitle4")}</h5>
          <p>{t("education.body6")}</p>
        </aside>
      </div>
    </div>
  );
}
