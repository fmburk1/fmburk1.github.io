import React from "react";
import "./Profile.css";
import maxProfile from "../assets/maxprofile.jpg";
import emailIcon from "../assets/email.jpg";
import linkedInIcon from "../assets/linkedin.jpg";
import { useTranslation } from "react-i18next";
export default function Profile({ setActiveSection }) {
  const { t } = useTranslation();
  const traits = [
    { label: t("profile.label1") },
    { label: t("profile.label2") },
    { label: t("profile.label3") },
    { label: t("profile.label4") },
    { label: t("profile.label5") },
  ];
  return (
    <div className="profile">
      <div className="profile-grid">
        <aside className="profile-skills">
          {" "}
          <div className="skills-box">
            <h3 className="skills-heading">{t("profile.title1")}</h3>

            <ul className="skill-badges">
              {[
                "Python",
                "JavaScript",
                "Microsoft Office Suite",
                "SQL",
                "Tableau",
                "Deep Learning",
                "AI Implementations",
                "Google Analytics",
                "React",
              ].map((skill) => (
                <li key={skill} className="skill-badge">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="skills-box">
            <h3 className="skills-heading">{t("profile.title2")}</h3>

            <ul className="skill-badges">
              {[
                t("profile.interest1"),
                t("profile.interest2"),
                t("profile.interest3"),
                t("profile.interest4"),
                t("profile.interest5"),
                t("profile.interest6"),
                t("profile.interest7"),
              ].map((skill) => (
                <li key={skill} className="skill-badge">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="profile-main">
          <div className="profile-image-wrapper">
            <img src={maxProfile} alt="Your Name" className="profile-image" />
          </div>
          <div className="about-me-box">
            <p>{t("profile.body1")}</p>
            <p>{t("profile.body2")}</p>
            <div className="about-me-actions">
              <a
                href="mailto:maxburkwork@gmail.com"
                className="about-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={emailIcon} alt="Email" className="about-icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/friedrich-burk-019aa91b9/"
                className="about-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedInIcon} alt="LinkedIn" className="about-icon" />
              </a>
            </div>
          </div>
          <div className="profile-bullets">
            {traits.map((trait, index) => (
              <div key={index} className="profile-bullet">
                <span>{trait.label}</span>
              </div>
            ))}
          </div>
        </main>
        <aside className="profile-extras">
          <div className="skills-box">
            <h3 className="skills-heading">{t("profile.title3")}</h3>

            <ul className="skill-badges">
              {[
                t("profile.language1"),
                t("profile.language2"),
                t("profile.language3"),
              ].map((skill) => (
                <li key={skill} className="skill-badge">
                  {skill}
                </li>
              ))}
            </ul>
            <h3 className="skills-heading" style={{ marginTop: "1rem" }}>
              {t("profile.title4")}
            </h3>
            <ul className="skill-badges">
              {[
                t("profile.nationality1"),
                t("profile.nationality2"),
                t("profile.nationality3"),
              ].map((skill) => (
                <li key={skill} className="skill-badge">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="skills-box">
            <h3 className="skills-heading">{t("profile.title5")}</h3>

            <ul className="skill-badges">
              {[t("profile.interesting1"), t("profile.interesting2")].map(
                (skill) => (
                  <li key={skill} className="skill-badge">
                    {skill}
                  </li>
                )
              )}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
