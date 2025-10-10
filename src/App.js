import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Subpage from "./Components/Subpage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router basename="/LOGISTICS">
      <Navbar/>
     <Subpage/>
    </Router>
  );
}

export default App;
