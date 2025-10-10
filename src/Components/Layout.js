import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Navbar"; // Your Navbar component

function Layout({ children }) {
  const location = useLocation();

  // Define marginTop value - this can be adjusted or dynamic
  const marginTopValue = location.pathname === "/" ? 0 : 80; // 80 px or mt:10 equivalent

  return (
    <>
      <Navbar />
      <Box sx={{ mt: `${marginTopValue}px` }}>
        {children}
      </Box>
    </>
  );
}

export default Layout;
