import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Fallback from "./Pages/Fallback";
import "leaflet/dist/leaflet.css";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Fallback />} />
      </Routes>
    </Router>
  );
};

export default App;
