import React from "react";
import '../styles/About.css'

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About the Creator</h1>
        <p className="about-text">
          Created with ❤️ by <span className="highlight">Prince</span>
        </p>
        <p className="about-text">
          Date of Creation: <span className="highlight">October, 2025</span>
        </p>
        <p className="about-text">
          Prince is a passionate <span className="highlight"> Software Engineer </span> 
          with expertise in Java, AWS, and modern UI development. His vision is to 
          craft elegant digital experiences with cutting-edge technologies while keeping 
          design minimal and user-focused.
        </p>
        <p className="about-text">
          This project reflects his journey of continuous learning and growth — a blend 
          of technical mastery and creative expression.
        </p>
      </div>
    </div>
  );
}