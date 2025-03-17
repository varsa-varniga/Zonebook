import React from "react";

const Header = () => {
  const navStyle = {
    padding: "20px",
    borderBottom: "1px solid #ddd",
    textAlign: "center",
  };

  const navItemStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    padding: "10px",
    transition: "color 0.3s ease",
  };

  return (
    <header style={navStyle}>
      <nav>
        <a href="#" style={navItemStyle}>How it works</a>
        <a href="#" style={navItemStyle}>Calculate my earnings</a>
        <a href="#" style={navItemStyle}>Browse Integration</a>
        <a href="#" style={navItemStyle}>Resource</a>
        <a href="#" style={navItemStyle}>Blog</a>
      </nav>
    </header>
  );
};

export default Header;
