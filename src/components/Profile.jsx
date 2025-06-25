import React from "react";
import ThreeDTiltCard from "./3DTiltCard";
import "./Profile.css";

export default function Profile({ setActiveSection }) {
  return (
    <div className="profile">
      <div className="card-row">
        <ThreeDTiltCard title="Project 1" preview="Preview for Project 1" />
        <ThreeDTiltCard title="Project 2" preview="Preview for Project 2" />
        <ThreeDTiltCard title="Project 3" preview="Preview for Project 3" />
      </div>
    </div>
  );
}
