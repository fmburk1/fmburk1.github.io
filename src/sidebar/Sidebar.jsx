import React from "react";
import "./SidebarLayout.css";

export default function SidebarLayout({ activeTab, setActiveTab }) {
  return (
    <div className="container">
      <aside className="sidebar">
        <ul>
          <li
            className={activeTab === "Profile" ? "active" : ""}
            onClick={() => setActiveTab("Profile")}
          >
            Profile
          </li>
          <li
            className={activeTab === "Education" ? "active" : ""}
            onClick={() => setActiveTab("Education")}
          >
            Education
          </li>
          <li
            className={activeTab === "Work" ? "active" : ""}
            onClick={() => setActiveTab("Work")}
          >
            Work Experience
          </li>
        </ul>
      </aside>
    </div>
  );
}
