import React, { useState } from "react";
import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import ZoneBookSetupWizard from "./module40/calculateearnings.jsx";
import HowItWorks from "./howitworks.jsx"; // You would need to create this component
import BrowseIntegration from "./browseintegration.jsx"; // You would need to create this component
import Resource from "./resource.jsx"; // You would need to create this component
import Blog from "./blog.jsx"; // You would need to create this component

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("calculate"); // Default to Calculate my earnings

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "howItWorks":
        return <HowItWorks />;
      case "calculate":
        return <ZoneBookSetupWizard />;
      case "integration":
        return <BrowseIntegration />;
      case "resource":
        return <Resource />;
      case "blog":
        return <Blog />;
      default:
        return <ZoneBookSetupWizard />;
    }
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}
      >
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box />
            <Box sx={{ display: "flex", gap: "30px" }}>
              <Button
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  textTransform: "none",
                  borderBottom:
                    activeTab === "howItWorks" ? "3px solid #333" : "none",
                  paddingBottom: "5px",
                }}
                onClick={() => handleTabChange("howItWorks")}
              >
                How it works
              </Button>
              <Button
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  textTransform: "none",
                  borderBottom:
                    activeTab === "calculate" ? "3px solid #333" : "none",
                  paddingBottom: "5px",
                }}
                onClick={() => handleTabChange("calculate")}
              >
                Calculate my earnings
              </Button>
              <Button
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  textTransform: "none",
                  borderBottom:
                    activeTab === "integration" ? "3px solid #333" : "none",
                  paddingBottom: "5px",
                }}
                onClick={() => handleTabChange("integration")}
              >
                Browse Integration
              </Button>
              <Button
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  textTransform: "none",
                  borderBottom:
                    activeTab === "resource" ? "3px solid #333" : "none",
                  paddingBottom: "5px",
                }}
                onClick={() => handleTabChange("resource")}
              >
                Resource
              </Button>
              <Button
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  textTransform: "none",
                  borderBottom:
                    activeTab === "blog" ? "3px solid #333" : "none",
                  paddingBottom: "5px",
                }}
                onClick={() => handleTabChange("blog")}
              >
                Blog
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Render the active component */}
      {renderContent()}
    </>
  );
};

export default NavBar;
