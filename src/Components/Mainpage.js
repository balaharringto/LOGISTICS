import { AppBar, Toolbar, Typography, Button, Box, Grid, Container, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import heroImage from "../images/newbg.png";
import logo from "../images/log1.png";
import img1 from "../images/logo1.png";
import img2 from "../images/logo2.png";
import img3 from "../images/logo3.png";
import img4 from "../images/logo4.png";
import img5 from "../images/logo5.png";
import worldImage from "../images/world.png"

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
     <AppBar
      position="static"
  sx={{
    backgroundColor: "transparent",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    backdropFilter: "blur(8px)",
    width: "100%",   // full width
    py: 1.5,
      }}
    >
      <Toolbar sx={{ flexDirection: "column", px: 2 }}>
        {/* ---------- First Row: Logo + Company Name ---------- */}
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                component="img"
                src={logo}
                alt="Company Logo"
                sx={{
                  height: 70,
                  width: 90,
                  cursor: "pointer",
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))",
                }}
              />

         <Box sx={{ display: "flex", alignItems: "center",mt:2}}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#1c61ad", }}
      >
        SRI
      </Typography>
      <Box
        component="img"
        src={worldImage}
        alt="world"
        sx={{ height: 18, width: 28}} // adjust size as needed
      />
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#1c61ad",}}
      >
        ESHWAR
      </Typography>
    </Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "#444",
                    letterSpacing: 0.5,
                    mt: 2,
                  }}
                >
                  LOGISTICS PVT LTD.
                </Typography>
              </Box>
            
          </Grid>
        </Grid>

        {/* ---------- Second Row: Navigation + Contact + Search ---------- */}
     
         
    
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{  gap: 5,mt:1 }}
        >
          {/* <Grid item mr={5}
          justifyItems="start" >
 <Box
                component="img"
                src={logo}
                alt="Company Logo"
                sx={{
           
                  height: 70,
                  width: 90,
                  cursor: "pointer",
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))",
                }}
              />
          </Grid>
           */}

          {/* Navigation Links */}
          {["Home", "Services", "Enquiry", "Careers", "About Us", "More"].map(
            (item, index) => (
              <Grid item key={index}>
                <Typography
                  variant="body1"
                  sx={{
                    color:"#A3552A" ,
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "15px",
                    position: "relative",
                    "&:hover": { color: "black" },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: -3,
                      left: 0,
                      backgroundColor: "#A3552A",
                      transition: "width 0.3s",
                    },
                    "&:hover::after": { width: "100%" },
                  }}
                >
                  {item}
                </Typography>
              </Grid>
            )
          )}

          {/* Contact Button */}
          <Grid item sx={{ml:5}}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#A3552A",
                fontWeight: "bold",
                px: 2.5,
                "&:hover": { backgroundColor: "#8B451A" },
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              Contact Us
            </Button>
          </Grid>

          {/* Search Box */}
          <Grid item sx={{ml:3}}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "5px",
                px: 1.5,
                py: 0.3,
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: "#00c4cc",
                  boxShadow: "0 0 8px rgba(0,196,204,0.3)",
                },
              }}
            >
              <InputBase
                placeholder="Search..."
                sx={{ ml: 1, fontSize: "14px", width: "190px" }}
              />
              <IconButton type="submit" sx={{ p: 0.5 }}>
                <SearchIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
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
    <Box sx={{ textAlign: "center", py: 2, px: 2,mt:2 }}>
      {/* Section Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 6,
          letterSpacing: 1,
          textTransform: "uppercase",
          color: "#333",
        }}
      >
        OUR CLIENTS
      </Typography>

      {/* Client Logos in Flex */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          flexWrap: "wrap",
        }}
      >
        {clientImages.map((img, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              p: 3,
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
                height: 80,
                width: "auto",
                objectFit: "contain",
                mb: 1,
              }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
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
  );
};

export default MainPage;
