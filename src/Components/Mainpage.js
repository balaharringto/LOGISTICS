import React from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import heroImage from "../images/bg5.png";
import heroMobileImage from "../images/hero3.png";
import logo from "../images/log1.png";
import img1 from "../images/logo1.png";
import img2 from "../images/logo2.png";
import img3 from "../images/logo3.png";
import img4 from "../images/logo4.png";
import img5 from "../images/logo5.png";
import worldImage from "../images/world.png";
import Service from "./Service";

const clientImages = [img1, img2, img3, img4, img5];
const clientNames = ["TATA", "JIO", "MAHINDRA", "TCS", "SOFTKNOW"];

const MainPage = () => {
  const theme = useTheme();
  const isMobileWidth = useMediaQuery("(max-width:850px)");

  return (
    <Box>
      <Box
        sx={{
          mt: 8,
          backgroundImage: `url(${isMobileWidth ? heroMobileImage : heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          color: "black",
          pb:5
        }}
      >
        {/* Hero Section */}
        <Container
          sx={{
            py: isMobileWidth ? 3 : 8,
            display: "flex",
            alignItems: isMobileWidth ? "flex-start" : "center",
            justifyContent: "space-between",
            flexDirection: isMobileWidth ? "column" : "row",
            flexWrap: "wrap",
            gap: 4,
            
          }}
        >
          {/* Header/Content: mobile bigger text and more mt */}
          <Box
            sx={{
              width: isMobileWidth ? "100%" : "40%",
              textAlign: isMobileWidth ? "center" : "left",
              mx: isMobileWidth ? "auto" : 0,
              mt: isMobileWidth ? 29 : 0,
            
            }}
          >
            <Typography
              variant={isMobileWidth ? "h4" : "h3"}
              sx={{
                fontWeight: "bold",
                lineHeight: 1.2,
                mb: isMobileWidth ? 2.5 : 2,
                fontSize: isMobileWidth ? "2.2rem" : "3.5rem",
              }}
            >
              DELIVERING TRUST ON TIME{" "}
              <span style={{ color: "#A3552A" }}>Fast and Easily</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "black",
                mb: isMobileWidth ? 3 : 4,
                fontFamily: "'Segoe UI', 'Roboto', sans-serif",
                fontWeight: 600,
                fontSize: isMobileWidth ? "1.15rem" : "1rem",
                mt: isMobileWidth ? 15 : 0,
              }}
            >
              Your business success starts with our on-time delivery
            </Typography>
            <Button
              variant="contained"
              sx={{
                fontWeight: "bold",
                backgroundColor: "#A3552A",
                "&:hover": { backgroundColor: "#8B451A" },
                px: 4,
                py: isMobileWidth ? 2 : 1,
                fontSize: isMobileWidth ? "1rem" : "1rem",
                mx: isMobileWidth ? "auto" : 0,
                display: "block",
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Optional image/content: BELOW HERO TEXT IN MOBILE */}
          <Box
            sx={{
              width: isMobileWidth ? "100%" : "50%",
              minHeight: isMobileWidth ? 170 : 350,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: isMobileWidth ? 2 : 0,
            }}
          >
            {/* place your image or illustration here if needed */}
          </Box>
        </Container>

        {/* Clients Section - smaller spacings and less mt for mobile */}
        <Box sx={{
          textAlign: "center",
          py: isMobileWidth ? 1.2 : 2,
          px: isMobileWidth ? 0.8 : 2,
          mt: isMobileWidth ? 0.5 : 2
        }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: isMobileWidth ? 3 : 6,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#333",
              fontSize: isMobileWidth ? "1.1rem" : "1.4rem"
            }}
          >
            OUR CLIENTS
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: isMobileWidth ? 2 : 6,
              flexWrap: "wrap",
            }}
          >
            {clientImages.map((img, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  p: isMobileWidth ? 1.2 : 3,
                  borderRadius: "16px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={clientNames[index]}
                  sx={{
                    height: isMobileWidth ? 48 : 80,
                    width: "auto",
                    objectFit: "contain",
                    mb: 1,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: isMobileWidth ? "13px" : "16px",
                    color: "#333",
                    mt: 1,
                  }}
                >
                  {clientNames[index]}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Service />
    </Box>
  );
};

export default MainPage;
