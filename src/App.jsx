import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import SidebarLayout from "./sidebar/Sidebar.jsx";
import Education from "./components/Education";
import Work from "./components/Work";
import Profile from "./components/Profile";
import Home from "./components/Home";
import "./i18n";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const educationRef = useRef(null);
  const workRef = useRef(null);

  const sectionRefs = {
    Home: homeRef,
    Profile: profileRef,
    Education: educationRef,
    Work: workRef,
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.dataset.section);
        }
      },
      { threshold: 0.6 }
    );

    Object.entries(sectionRefs).forEach(([section, ref]) => {
      if (ref.current) {
        ref.current.dataset.section = section;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Hamburger Button */}
      <button
        className={`hamburger-button ${sidebarOpen ? "open" : "closed"}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "✖" : "☰"}
      </button>

      <SidebarLayout
        scrollToSection={scrollToSection}
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection}
        isOpen={sidebarOpen}
      />
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <div className="gradient-background" />

        {/* Main content with smooth width/margin-left transition */}
        <main
          className={`main-content ${
            sidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          <section
            ref={homeRef}
            className="section"
            style={{ scrollSnapAlign: "start" }}
          >
            <Home
              scrollToSection={scrollToSection}
              setActiveSection={setActiveSection}
            />
          </section>
          <section
            ref={profileRef}
            className="section"
            style={{ scrollSnapAlign: "start" }}
          >
            <Profile setActiveSection={setActiveSection} />
          </section>
          <section
            ref={educationRef}
            className="section"
            style={{ scrollSnapAlign: "start" }}
          >
            <Education setActiveSection={setActiveSection} />
          </section>
          <section
            ref={workRef}
            className="section"
            style={{ scrollSnapAlign: "start" }}
          >
            <Work setActiveSection={setActiveSection} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
