import React from "react";
import { Box, Typography, Button, Paper, useTheme, useMediaQuery } from "@mui/material";

import img1 from "../images/drive1.png";
import img2 from "../images/drive2.png";
import img3 from "../images/drive3.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import location from "../images/location.png";

function Service() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:850px)");

  return (
    <Box sx={{ py: isMobile ? 3 : 8, background: "#fff", mt: 3 }}>
      <Typography variant={isMobile ? "h5" : "h4"} align="center" sx={{ fontWeight: "bold", mb: isMobile ? 2 : 6 }}>
        Our <span style={{ color: "#58c4ed" }}>Services</span>
      </Typography>

      {/* Service Section 1 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          px: isMobile ? 1 : "5%",
          my: isMobile ? 2 : 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: isMobile ? "100%" : "65%",
            mb: isMobile ? 2 : 0,
            p: isMobile ? 1.5 : 2,
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            boxShadow: isMobile ? 1 : "0px 4px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              transform: isMobile ? undefined : "translateY(-8px)",
              boxShadow: isMobile ? undefined : "0px 12px 30px rgba(0,0,0,0.35)",
            },
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <Box component="img" src={img1} sx={{ width: isMobile ? 140 : 350, height: isMobile ? 75 : 150, mr: isMobile ? 1 : 3 }} alt="Fast" />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Fast Order Processing
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              We make sure every order is handled quickly and efficiently, so you don't have to wait long. Your time matters to us.
            </Typography>
            <Button variant="outlined" size={isMobile ? "small" : "medium"}>Order Now</Button>
          </Box>
        </Paper>
        <Box
          sx={{
            width: isMobile ? "100%" : "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            ml: isMobile ? 0 : 8,
            mt: isMobile ? 1 : 0,
          }}
        >
          <Box component="img" src={icon1} alt="Icon" sx={{ width: 40, height: 40, mb: 1 }} />
          <Typography sx={{ fontWeight: "bold", color: "#58c4ed", mt: 1, fontSize: isMobile ? "0.9rem" : "1rem" }}>
            TAKE 5 MINUTES
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            To Place Your Order
          </Typography>
        </Box>
      </Box>

      {/* Service Section 2 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: isMobile ? "column-reverse" : "row",
          px: isMobile ? 1 : "5%",
          my: isMobile ? 2 : 4,
        }}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mr: isMobile ? 0 : 3,
            mt: isMobile ? 1 : 0,
          }}
        >
          <Box component="img" src={icon2} alt="Drive Icon" sx={{ width: 40, height: 40, mb: 1 }} />
          <Typography sx={{ fontWeight: "bold", color: "#58c4ed", mt: 1, fontSize: isMobile ? "0.9rem" : "1rem" }}>
            DRIVE 5 MINUTES
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            To Your Location
          </Typography>
        </Box>
        <Paper
          elevation={3}
          sx={{
            width: isMobile ? "100%" : "65%",
            mb: isMobile ? 2 : 0,
            p: isMobile ? 1.5 : 2,
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            boxShadow: isMobile ? 1 : "0px 4px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              transform: isMobile ? undefined : "translateY(-8px)",
              boxShadow: isMobile ? undefined : "0px 12px 30px rgba(0,0,0,0.35)",
            },
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <Box component="img" src={img2} sx={{ width: isMobile ? 140 : 350, height: isMobile ? 75 : 150, mr: isMobile ? 1 : 3 }} alt="On-Time" />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Delivered with Care
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              We make sure every order is handed to you safely and with a smile. Your satisfaction is our top priority from start to finish.
            </Typography>
            <Button variant="outlined" size={isMobile ? "small" : "medium"}>Track Order</Button>
          </Box>
        </Paper>
      </Box>

      {/* Service Section 3 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          px: isMobile ? 1 : "5%",
          my: isMobile ? 2 : 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: isMobile ? "100%" : "65%",
            mb: isMobile ? 2 : 0,
            p: isMobile ? 1.5 : 2,
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            boxShadow: isMobile ? 1 : "0px 4px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              transform: isMobile ? undefined : "translateY(-8px)",
              boxShadow: isMobile ? undefined : "0px 12px 30px rgba(0,0,0,0.35)",
            },
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <Box component="img" src={img3} sx={{ width: isMobile ? 140 : 350, height: isMobile ? 75 : 150, mr: isMobile ? 1 : 3 }} alt="Care" />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              On-Time Delivery
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Your order is on the move! Our delivery partners make sure every package reaches your doorstep on time – safe and secure.
            </Typography>
            <Button variant="outlined" size={isMobile ? "small" : "medium"}>Confirm Delivery</Button>
          </Box>
        </Paper>
        <Box
          sx={{
            width: isMobile ? "100%" : "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            ml: isMobile ? 0 : 8,
            mt: isMobile ? 1 : 0,
          }}
        >
          <Box component="img" src={icon3} alt="Delivery Icon" sx={{ width: 40, height: 40, mb: 1 }} />
          <Typography sx={{ fontWeight: "bold", color: "#58c4ed", mt: 1, fontSize: isMobile ? "0.9rem" : "1rem" }}>
            DELIVERY 5 MINUTES
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Right To Your Hands
          </Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Box textAlign="center" sx={{ mt: isMobile ? 6 : 13 }}>
        <Box
          component="img"
          src={location}
          alt="Location"
          sx={{
            mt: 7,
            width: "60px",
            height: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Typography variant={isMobile ? "body1" : "h6"} sx={{ fontWeight: "bold" }}>
          No Matter Where You Are
        </Typography>
        <Typography variant="subtitle1">
          We Deliver Your Products Within 15 Minutes
        </Typography>
      </Box>
    </Box>
  );
}

export default Service;
