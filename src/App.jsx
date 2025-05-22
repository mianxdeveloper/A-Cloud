import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Header from "./components/Header";
import Fallback from './Pages/Fallback'
import Contact from "./Pages/Contact";
import 'leaflet/dist/leaflet.css';
import About from "./Pages/About";


const App = () => {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Fallback />}/>
            </Routes>
        </Router>
    );
};

export default App;
