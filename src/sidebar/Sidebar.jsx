import React, { useState } from "react";
import "./SidebarLayout.css";
import ProfileImage from "../assets/Profile.jpg";
import USFlag from "../assets/America.png";
import GermanFlag from "../assets/Germany.png";
import { useTranslation } from "react-i18next";
import "../i18n";
import campanile from "../assets/campanile.png";

export default function SidebarLayout({
  scrollToSection,
  setSidebarOpen,
  activeSection,
  isOpen,
}) {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const handleTabClick = (tab) => {
    scrollToSection(tab);
  };

  return (
    <aside
      className={`sidebar ${isOpen ? "open" : "closed"}`}
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${campanile})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="language-dropdown">
        <button
          className="language-toggle"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {i18n.language === "en" ? (
            <>
              <img src={USFlag} alt="English" /> English
            </>
          ) : (
            <>
              <img src={GermanFlag} alt="Deutsch" /> Deutsch
            </>
          )}
        </button>
        {dropdownOpen && (
          <div className="language-menu">
            <div onClick={() => changeLanguage("en")}>
              <img src={USFlag} alt="English" /> English
            </div>
            <div onClick={() => changeLanguage("de")}>
              <img src={GermanFlag} alt="Deutsch" /> Deutsch
            </div>
          </div>
        )}
      </div>

      <div className="sidebar-spacer" />

      <img src={ProfileImage} alt="Profile" className="profile-photo" />

      <ul>
        {["Home", "Profile", "Education", "Work"].map((tab) => (
          <li
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={activeSection === tab ? "active" : ""}
          >
            {t(`sidebar.${tab.toLowerCase()}`)}
          </li>
        ))}
      </ul>
    </aside>
  );
}
