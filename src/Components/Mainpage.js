import { AppBar, Toolbar, Typography, Button, Box, Grid, Container, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import heroImage from "../images/hero.png";
import logo from "../images/logo.png";
import img1 from "../images/logo1.png";
import img2 from "../images/logo2.png";
import img3 from "../images/logo3.png";
import img4 from "../images/logo4.png";
import img5 from "../images/logo5.png";

const clientImages = [img1, img2, img3, img4, img5];
const clientNames = ["TATA", "JIO", "MAHINDRA", "TCS", "SOFTKNOW"];
const MainPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "black",
      }}
    >
      {/* Navbar */}
      <AppBar position="static" sx={{ background: "transparent", boxShadow: "none", color: "black" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: 5, mt: 2 }}>
          
          {/* Logo + Company Name */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center",mt:3,gap:1}}>
              <Box
                component="img"
                src={logo}
                alt="Company Logo"
                sx={{ height: 60, width: 60, cursor: "pointer" }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>SRI ESWAR</Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 0.5 }}>
              LOGISTICD PVT LTD.
            </Typography>
          </Box>

          {/* Navigation + Search + Contact */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {["Home", "Services", "Enquiry", "Careers", "About Us", "More"].map((item, index) => (
              <Typography key={index} variant="body1" sx={{ cursor: "pointer", fontWeight: "bold" }}>
                {item}
              </Typography>
            ))}

            {/* Contact + Search */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#A3552A",
                  "&:hover": { backgroundColor: "#8B451A" },
                }}
              >
                Contact Us
              </Button>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: 2,
                  px: 1,
                  py: 0.3,
                  ml: 1,
                }}
              >
                <InputBase placeholder="Search..." sx={{ ml: 1 }} />
                <IconButton type="submit" sx={{ p: 0.5 }}>
                  <SearchIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container
        sx={{
          mt: 10,
          mb: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {/* Left Side - Text and Button */}
        <Box sx={{ flex: "1 1 35%", minWidth: "200px" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", lineHeight: 1.2, mb: 2 }}>
           DELIVERING TRUST ON TIME <span style={{ color: "#A3552A" }}>Fast and Easily</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "black", mb: 4 }}>
Your business success starts with our on-time delivery          </Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: "bold",
              backgroundColor: "#A3552A",
              "&:hover": { backgroundColor: "#8B451A" },
              px: 4,
              py: 1,
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Right Side - Optional Image */}
        <Box
          sx={{
            flex: "1 1 45%",
            minWidth: "300px",
            height: "400px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "80px",
            marginTop: "20px",
          }}
        ></Box>
      </Container>

      {/* Clients Section */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, mt: 6, flexWrap: "wrap" }}>
      {clientImages.map((img, index) => (
        <Box key={index} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={img}
            alt={clientNames[index]}
            sx={{ height: 80, width: "auto", objectFit: "contain", mb: 1 }}
          />
          <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {clientNames[index]}
          </Typography>
        </Box>
      ))}
    </Box>
    </Box>
  );
};

export default MainPage;
