import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/log1.png";
import worldImage from "../images/world.png";

function Navbar() {
  const location = useLocation();

  const theme = useTheme();
  const showNotifAndAvatar = useMediaQuery("(min-width:1220px)");
  const showSearchBar = useMediaQuery("(min-width:1084px)");
  const showNavLinks = useMediaQuery("(min-width:851px)");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICE US", path: "/service" },
    { name: "ABOUT", path: "/about" },
    { name: "CAREERS", path: "/careers" },
    { name: "MORE", path: "/enquery" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: "50vw",
        height: "100vh",
        bgcolor: "white",
        color: "black",
        p: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map(({ name, path }) => (
          <ListItem
            button
            component={Link}
            to={path}
            key={name}
            selected={location.pathname === path}
          >
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: location.pathname === path ? "bold" : "normal",
                  }}
                >
                  {name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        mb: 20,
        Width: "100%",
        margin: "0 auto",
        background: "linear-gradient(90deg, #E2F3FE 0%, #FFFFFF 100%)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        backdropFilter: "blur(8px)",
        width: "100%",
        py: 1.5,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo & Company */}
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
          <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1, ml: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#1c61ad" }}
              >
                SRI
              </Typography>
              <Box
                component="img"
                src={worldImage}
                alt="World"
                sx={{ height: 16, width: 24, mx: 0.5 }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#1c61ad" }}
              >
                ESHWAR
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1c61ad",
                letterSpacing: 0.5,
              }}
            >
              LOGISTICS PTE LTD.
            </Typography>
          </Box>
        </Box>

        {/* Center navigation links only on wide screens */}
        {showNavLinks ? (
          <Box sx={{ display: "flex", gap: 4 }}>
            {navItems.map(({ name, path }) => (
              <Typography
                key={path}
                component={Link}
                to={path}
                variant="body1"
                sx={{
                  textDecoration: "none",
                  color: location.pathname === path ? "#1976D2" : "#000",
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
                {name}
              </Typography>
            ))}
          </Box>
        ) : null}

        {/* Right section with menu icon, ORDER'S button, search, notif, avatar */}
       <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
  {showNavLinks && (
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
  )}

  {!showNavLinks && (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={toggleDrawer(true)}
    >
      <MenuIcon sx={{ color: "#000" }} />
    </IconButton>
  )}

  {showSearchBar && (
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
  )}
</Box>


        {/* Drawer for the hamburger menu */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
