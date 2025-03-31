import { Tabs, Tab, Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SubNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  // Define routes and tab labels
  const routes = [
    { path: "/working", label: "How it works" },
    { path: "/calculate", label: "Calculate my earnings" },
    { path: "/browse-integration", label: "Browse Integration" }, // Fixed path case
    { path: "/resource", label: "Resource" },
    { path: "/blog", label: "Blog" },
  ];

  // Sync active tab with current location
  useEffect(() => {
    const activeTab = routes.findIndex((route) => route.path === location.pathname);
    setValue(activeTab !== -1 ? activeTab : 0); // Set default to first tab if not found
  }, [location.pathname]);

  // Handle tab change and navigation
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(routes[newValue].path);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: "64px", // Adjust based on your main navbar height
        zIndex: 1000,
        backgroundColor: "#fff",
        borderBottom: 1,
        borderColor: "divider",
        display: "flex",
        justifyContent: "center", // Centered for better UX
        width: "100%", // Prevent shrinking
        py: 1, // Padding to prevent height reduction
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#2E2E2E",
            height: "3px",
            borderRadius: "2px",
            bottom: "5px",
          },
        }}
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: "14px",
            color: "#000",
            minWidth: "120px", // Ensure all tabs have a consistent width
            "&:hover": { color: "#000" },
          },
          "& .Mui-selected": {
            color: "#000",
            fontWeight: "bold",
          },
          "& .MuiTabs-indicator": {
            transition: "all 0.3s ease",
          },
          "& .MuiTab-root:focus": {
            outline: "none",
          },
          "& .MuiTouchRipple-root": {
            display: "none",
          },
          "& .MuiTabs-flexContainer": {
            "& button:active": {
              color: "#000",
            },
          },
        }}
      >
        {routes.map((route, index) => (
          <Tab key={index} label={route.label} disableRipple />
        ))}
      </Tabs>
    </Box>
  );
};

export default SubNavbar;
