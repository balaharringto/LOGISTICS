import { Typography, Button,Container,Box } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import heroImage from "../images/bg5.png";
import logo from "../images/log1.png";
import img1 from "../images/logo1.png";
import img2 from "../images/logo2.png";
import img3 from "../images/logo3.png";
import img4 from "../images/logo4.png";
import img5 from "../images/logo5.png";
import worldImage from "../images/world.png"
import Service from "./Service";

const clientImages = [img1, img2, img3, img4, img5];
const clientNames = ["TATA", "JIO", "MAHINDRA", "TCS", "SOFTKNOW"];
const MainPage = () => {
  return (
    <Box>

   
    <Box
      sx={{
        mt:8,
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "black",

      
        
   
      
      }}
    >
      {/* Navbar */}
    
    
      {/* Hero Section */}
      <Container
        sx={{
        
          mb: 16,
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
         <Typography
  variant="body1"
  sx={{
    color: "black",
    mb: 4,
    fontFamily: "'Segoe UI', 'Roboto', sans-serif", // you can replace with your preferred font
    fontWeight: 600, // semi-bold
  }}
>
  Your business success starts with our on-time delivery
</Typography>

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
            pb:10
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
       <Service/>
     </Box>
  );
};

export default MainPage;
