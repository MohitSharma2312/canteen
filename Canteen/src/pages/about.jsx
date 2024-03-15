import React from "react";
import "../CSS/about.css";

const AboutUs = () => {
  const teamMembers = [
    { name: "Mohit Sharma", image: "https://via.placeholder.com/150" },
    { name: "Sourav Narayan", image: "https://via.placeholder.com/150" },
    { name: "Reetika", image: "https://via.placeholder.com/150" },
    { name: "Pariniti Sinha", image: "https://via.placeholder.com/150" },
    { name: "Abhishek Deep", image: "https://via.placeholder.com/150" },
    // Add more team members as needed
  ];

  return (
    <div className="about">
      <div className="about-us">
        <h1>Know Us Better...</h1>
        <p className="heading-p">
          Welcome to our website! We are a dedicated team of professionals who
          are passionate about what we do.
        </p>
      </div>
      <div className="container">
        <div className="box">
          <h2>Why?</h2>
          <p>Why we do...</p>
        </div>
        <div className="box">
          <h2>What?</h2>
          <p>What we do...</p>
        </div>
        <div className="box">
          <h2>How?</h2>
          <p>How we do...</p>
        </div>
      </div>
      <div className="team-title">
        <h2>Our Team</h2>
      </div>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
