import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import LearningSuggestions from "./components/LearningSuggestions";
import HtmlCss from "./components/topics/HtmlCss";
import JavaScript from "./components/topics/JavaScript";
import ReactTopic from "./components/topics/React";
import NodeJs from "./components/topics/NodeJs";
import Git from "./components/topics/Git";
import About from "./components/About";
import "./styles/Header.css";
import "./styles/LearningSuggestions.css";

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
          <Route path="/html-css" element={<HtmlCss />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/react" element={<ReactTopic />} />
          <Route path="/nodejs" element={<NodeJs />} />
          <Route path="/git" element={<Git />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
