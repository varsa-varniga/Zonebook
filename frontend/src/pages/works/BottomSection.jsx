import React from "react";

const BottomSection = () => {
  const bottomSectionStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    padding: "40px 20px",
    backgroundColor: "#f8f8f8",
  };

  const bottomItemStyle = {
    textAlign: "center",
    maxWidth: "250px",
  };

  const titleStyle = {
    fontSize: "20px",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#555",
  };

  const buttonStyle = {
    marginTop: "15px",
    backgroundColor: "#556b2f",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={bottomSectionStyle}>
      <div style={bottomItemStyle}>
        <h3 style={titleStyle}>Sign up for free</h3>
        <p style={textStyle}>
          Fill out the form to become a ClassPass partner at no cost to you.
        </p>
      </div>
      <div style={bottomItemStyle}>
        <h3 style={titleStyle}>Build your profile</h3>
        <p style={textStyle}>
          Sync your booking system and add details of your business such as photos and descriptions of your services and amenities.
        </p>
        <button style={buttonStyle}>Get Started</button>
      </div>
      <div style={bottomItemStyle}>
        <h3 style={titleStyle}>Increase revenue</h3>
        <p style={textStyle}>
          Fill open spots, protect your direct member reservations and earn more with SmartTools.
        </p>
      </div>
    </div>
  );
};

export default BottomSection;
