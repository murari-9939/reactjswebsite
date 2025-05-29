import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import the Menu Icon

const CustomSidenavbar = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false); // Sidebar visibility state

  // Function to toggle the sidebar visibility
  const handleSidenavToggle = () => {
    setIsSidenavOpen(!isSidenavOpen); // Toggle the sidebar open/close state
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        className={`sidenav ${isSidenavOpen ? "open" : ""}`}
        style={{
          backgroundColor: "#f8f9fa",
          height: "100vh",
          width: isSidenavOpen ? "250px" : "0", // Toggle width based on state
          padding: "20px",
          transition: "width 0.3s ease",
          overflowX: "hidden",
        }}
      >
        <h2>Side Navigation</h2>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </div>

      {/* Main Content Area */}
      <div style={{ flexGrow: 1, padding: "20px" }}>
        {/* Icon Button to Toggle Sidebar */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleSidenavToggle} // Toggle sidebar on click
          style={{ marginBottom: "20px" }} // Optional: add margin if needed
        >
          <MenuIcon /> {/* Menu Icon to open/close the sidebar */}
        </IconButton>

        <h1>Main Content Area</h1>
        <p>This is the main content of your application.</p>
      </div>
    </div>
  );
};

export default CustomSidenavbar;
