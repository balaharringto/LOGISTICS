import { AppBar, Toolbar, Typography, Button, Box, Grid, Container, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import heroImage from "../images/newbg.png";
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
       pb:-10,
       pl:2,
       pr:5
      
      }}
    >
      {/* Navbar */}
      <AppBar position="static" sx={{ background: "transparent", boxShadow: "none", color: "black" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: 5, mt: 2 }}>
          
          {/* Logo + Company Name */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center",gap:1}}>
              <Box
                component="img"
                src={logo}
                alt="Company Logo"
                sx={{ height: 60, width: 60, cursor: "pointer" }}
              />
              <Box sx={{mt:4}}>
<Typography variant="h5" sx={{ fontWeight: "bold" }}>SRI ESWAR<br/><span sx={{fontSize:"12px"}}>
                <Typography variant="subtitle2" sx={{fontSize:"10px",fontWeight:"bold",ml:1}}>LOGISTICD PVT LTD.</Typography> 
                </span></Typography>
              </Box>
              
            </Box>
            {/* <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 0.5 }}>
              LOGISTICD PVT LTD.
            </Typography> */}
          </Box>

          {/* Navigation + Search + Contact */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3,mt:2 ,mr:5,p:2}}>
            {["Home", "Services", "Enquiry", "Careers", "About Us", "More"].map((item, index) => (
              <Typography key={index} variant="body1" sx={{ cursor: "pointer", fontWeight: "bold" }}>
                {item}
              </Typography>
            ))}

            {/* Contact + Search */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
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
