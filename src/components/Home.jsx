import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Home({ scrollToSection, setActiveSection }) {
  const { t } = useTranslation();

  const handleClick = () => {
    scrollToSection("Profile");
    setActiveSection("Profile"); // Update active section manually
  };

  return (
    <div className="home">
      <div className="hero-container">
        <h1 className="hero-heading">{t("home.heading")} 👋</h1>
        <h2 className="hero-subheading">
          <Typewriter
            options={{
              strings: [
                t("home.word1"),
                t("home.word2"),
                t("home.word3"),
                t("home.word4"),
              ],
              html: true,
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              pauseFor: 2000,
            }}
          />
        </h2>
        <p className="hero-text">{t("home.body")}</p>
        <button className="label-button" onClick={handleClick}>
          {t("home.label")}
        </button>
      </div>
    </div>
  );
}
