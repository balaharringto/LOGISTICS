
import { Box, Typography, Button, Grid, Paper } from "@mui/material";

import img1 from "../images/drive1.png";
import img2 from "../images/drive2.png";
import img3 from "../images/drive3.png";
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import location from "../images/location.png"


function Service(){
    return (<>
    <Box sx={{ py: 8, background: "#fff" ,mt:3,}}>
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 6 }}>
        Our <span style={{ color: "#58c4ed" }}>Services</span>
      </Typography>
      {/* Top Row */}
     <Box 
    sx={{ 
      display: "flex", 
      alignItems: "center", 
      px: "5%", // 5% left and right padding (total 10%)
      my: 3 ,
      ml:15,
    }}
  >
    {/* Content Paper: 65% width */}
 <Paper
  elevation={3}
  sx={{
    width: "65%",
    p: 2,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)", // stronger base shadow
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0px 12px 30px rgba(0,0,0,0.35)", // stronger shadow on hover
    },
  }}
>
<Box component="img" src={img1} sx={{ width: 350, height: 150, mr: 3 }} alt="Fast" />
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          Fast Order Processing
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          We make sure every order is handled quickly and efficiently, so you don't have to wait long. Your time matters to us.
        </Typography>
        <Button variant="outlined">Order Now</Button>
      </Box>
    </Paper>
    {/* Icon and Description: 25% width */}
   <Box 
  sx={{ 
    width: "25%", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center",
    ml: 8 // space between Paper and Icon box
  }}
>
  <Box 
    component="img" 
    src={icon1} 
    alt="Icon" 
    sx={{ width: 48, height: 48, mb: 1 }} 
  />
  <Typography sx={{ fontWeight: "bold", color: "#58c4ed", mt: 1 }}>
    TAKE 5 MINUTES
  </Typography>
  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
    To Place Your Order
  </Typography>
</Box>
  </Box>
  
    {/* 1st Box: Icon Left, Paper Right */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: "5%",
        my: 4,
        ml:18,
        mt:7
      }}
    >
     <Box
  sx={{
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mr: 3
  }}
>
  <Box
    component="img"
    src={icon2}
    alt="Drive Icon"
    sx={{ width: 48, height: 48, mb: 1 }}
  />
  <Typography sx={{ fontWeight: "bold", color: "#58c4ed", mt: 1 }}>
    DRIVE 5 MINUTES
  </Typography>
  <Typography variant="body2" sx={{ fontWeight: 600 }}>
    To Your Location
  </Typography>
</Box>
  <Paper
  elevation={3}
  sx={{
    width: "65%",
    p: 2,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)", // stronger base shadow
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0px 12px 30px rgba(0,0,0,0.35)", // stronger shadow on hover
    },
  }}
>
        {/* Paper content originally from Box 1 */}
        <Box component="img" src={img2} sx={{ width: 350, height: 150, mr: 3  }} alt="On-Time" />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Delivered with Care
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            We make sure every order is handed to you safely and with a smile. Your satisfaction is our top priority from start to finish.
          </Typography>
          <Button variant="outlined">Track Order</Button>
        </Box>
      </Paper>
    </Box>
    {/* 2nd Box: Paper Left, Icon Right */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: "5%",
        my: 4,
        ml:15,
        mt:8
      }}
    >
      <Paper
  elevation={3}
  sx={{
    width: "65%",
    p: 2,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)", // stronger base shadow
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0px 12px 30px rgba(0,0,0,0.35)", // stronger shadow on hover
    },
  }}
>
        {/* Paper content originally from Box 2 */}
        <Box component="img" src={img3} sx={{  width: 350, height: 150, mr: 3 }} alt="Care" />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            On-Time Delivery
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Your order is on the move! Our delivery partners make sure every package reaches your doorstep on time – safe and secure.
          </Typography>
          <Button variant="outlined">Confirm Delivery</Button>
        </Box>
      </Paper>
   <Box
  sx={{
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    ml: 8
  }}
>
  <Box
    component="img"
    src={icon3}
    alt="Delivery Icon"
    sx={{ width: 48, height: 48, mb: 1 }}
  />
  <Typography sx={{ fontWeight: "bold", color: "#58c4ed", mt: 1 }}>
    DELIVERY 5 MINUTES
  </Typography>
  <Typography variant="body2" sx={{ fontWeight: 600 }}>
    Right To Your Hands
  </Typography>
</Box>
    </Box>
  
      {/* Footer */}
   <Box textAlign="center" sx={{ mt: 13 }}>
  <Box
    component="img"
    src={location}
    alt="Location"
    sx={{
      mt:7,
      width: "60px", // Adjust size as needed
      height: "auto",
   
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  />
  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    No Matter Where You Are
  </Typography>
  <Typography variant="subtitle1">
    We Deliver Your Products Within 15 Minutes
  </Typography>
</Box>
</Box>

    </>
    
)
}

export default Service;