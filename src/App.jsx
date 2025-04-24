import { useState } from "react";
import "./App.css";
import SidebarLayout from "./sidebar/Sidebar.jsx";
import Education from "./components/Education.jsx";
import Work from "./components/Work.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <Profile />;
      case "Education":
        return <Education />;
      default:
        return <Work />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", margin: 0, padding: 0 }}>
      <SidebarLayout activeTab={activeTab} setActiveTab={setActiveTab} />
      <main
        style={{
          marginLeft: "25vw",
          width: "75vw",
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
