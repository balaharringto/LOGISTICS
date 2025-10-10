import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Avatar, InputBase } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/log1.png";
import worldImage from "../images/world.png";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICE US", path: "/service" },
    { name: "ABOUT", path: "/about" },
    { name: "CAREERS", path: "/careers" },
    { name: "MORE", path: "/enquery" },
  ];

  return (
    
    <AppBar
      position="fixed"
      sx={{
       
        background: "linear-gradient(90deg, #E2F3FE 0%, #FFFFFF 100%)", // ✅ Gradient background
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        backdropFilter: "blur(8px)",
        width: "100%",
        py: 1.5,
        
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LEFT: Logo & Company */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={logo}
            alt="Company Logo"
            sx={{
              height: 70,
              width: "auto",
              objectFit: "contain",
              cursor: "pointer",
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1c61ad" }}>SRI</Typography>
              <Box component="img" src={worldImage} alt="World" sx={{ height: 16, width: 24 }} />
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1c61ad" }}>ESHWAR</Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ fontSize: "12px", fontWeight: "bold", color: "#1c61ad", letterSpacing: 0.5 }}>
              LOGISTICS PTE LTD.
            </Typography>
          </Box>
        </Box>

        {/* CENTER: Navigation */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {navItems.map((item, index) => (
            <Typography
              key={index}
              component={Link}
              to={item.path}
              variant="body1"
              sx={{
                textDecoration: "none",
                color: location.pathname === item.path ? "#1976D2" : "#000",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
                position: "relative",
                transition: "all 0.3s ease",
                "&:hover": { color: "#1976D2" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: -3,
                  left: 0,
                  backgroundColor: "#1976D2",
                  transition: "width 0.3s",
                },
                "&:hover::after": { width: "100%" },
              }}
            >
              {item.name}
            </Typography>
          ))}
        </Box>

        {/* RIGHT: Order + Search + Notifications + Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#A3552A",
              fontWeight: "bold",
              px: 3,
              py: 1,
              fontSize: "14px",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#8B451A" },
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            ORDER'S
          </Button>
          <Box
            sx={{
              px: 4,
              display: "flex",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "25px",
              padding: "4px 10px",
              width: "220px",
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: "0 0 5px rgba(0,0,0,0.2)" },
            }}
          >
            <InputBase
              placeholder="Search..."
              sx={{ ml: 1, flex: 1, fontSize: "14px" }}
            />
            <IconButton type="submit" sx={{ padding: "6px" }}>
              <SearchIcon sx={{ color: "black", fontSize: 18 }} />
            </IconButton>
          </Box>
          <IconButton>
            <NotificationsNoneIcon sx={{ color: "#000", fontSize: 24 }} />
          </IconButton>
          <Avatar
            alt="Profile"
            src="https://t3.ftcdn.net/jpg/03/22/53/38/360_F_322533850_Lz5JL2K0nVqL48gjCiRLSa2ssxpdfyer.jpg"
            sx={{ width: 38, height: 38, cursor: "pointer", border: "1px solid black" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
