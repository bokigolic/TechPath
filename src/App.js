import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import LearningSuggestions from "./components/LearningSuggestions";
import About from "./components/About";
import "./styles/Header.css";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigacija */}
        <nav className="header">
          <div className="nav-container">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </nav>

        {/* Rute */}
        <Routes>
          <Route path="/" element={<div><Hero /><LearningSuggestions /></div>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
