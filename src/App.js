import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Feed, ChannelDetails, Search, VideoDetails, Navbar } from "./utils";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/search/:searchterm" element={<Search />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
};

export default App;
