import { AppBar, Toolbar, Typography, Button, Box,Avatar, Container, InputBase, IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import SearchIcon from "@mui/icons-material/Search";
import heroImage from "../images/bg5.png";
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
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* ----------- LEFT: Logo & Company Name ----------- */}
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
            <Box sx={{ display: "flex", alignItems: "center",mt:1}}>
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
                sx={{ height: 16, width: 24}}
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

        {/* ----------- CENTER: Navigation Links ----------- */}
    <Box sx={{ display: "flex", gap: 4 }}>
  {["HOME", "ENQUERY", "SERVICE US", "CAREERS", "MORE"].map((item, index) => (
    <Typography
      key={index}
      variant="body1"
      sx={{
        color: index === 0 ? "#1976D2" : "#000", // First item blue, others black
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
      {item}
    </Typography>
  ))}
</Box>
        {/* ----------- RIGHT: Order Button + Icons ----------- */}
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
    px:4,
    display: "flex",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "25px",
    padding: "4px 10px",
    width: "220px",
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0 0 5px rgba(0,0,0,0.2)",
    },
  }}
>
  <InputBase
    placeholder="Search..."
    sx={{
      ml: 1,
      flex: 1,
      fontSize: "14px",
    }}
  />
  <IconButton
    type="submit"
    sx={{
      padding: "6px",
    }}
  >
    <SearchIcon sx={{ color: "black", fontSize: 18}} />
  </IconButton>
</Box>


          <IconButton>
            <NotificationsNoneIcon sx={{ color: "#000", fontSize: 24 }} />
          </IconButton>



          <Avatar
            alt="Profile"
            src="/profile.jpg" // replace with your profile image path
            sx={{
              width: 38,
              height: 38,
              cursor: "pointer",
              border: "2px solid #A3552A",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
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
  );
};

export default MainPage;
