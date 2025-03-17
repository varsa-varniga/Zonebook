import React from "react";

const MainSection = () => {
  const mainStyle = {
    textAlign: "center",
    padding: "60px 20px",
  };

  const titleStyle = {
    fontSize: "36px",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    marginBottom: "20px",
  };

  const buttonGroupStyle = {
    display: "inline-flex",
    gap: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#f8f8f8",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const activeButtonStyle = {
    backgroundColor: "#556b2f",
    color: "white",
  };

  return (
    <section style={mainStyle}>
      <h1 style={titleStyle}>How partnering with ZoneBook works</h1>
      <p style={subtitleStyle}>
        Find out how to list your classes and appointments on ZoneBook to scale your business.
      </p>
      <div style={buttonGroupStyle}>
        <button style={buttonStyle}>For business</button>
        <button style={{ ...buttonStyle, ...activeButtonStyle }}>
          For Zone Book Members
        </button>
      </div>
    </section>
  );
};

export default MainSection;
