import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import LearningSuggestions from "./components/LearningSuggestions";
import TopicPage from "./components/TopicPage"; // Nova komponenta za podstranice

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><Hero /><LearningSuggestions /></div>} />
        <Route path="/topic/:name" element={<TopicPage />} />
      </Routes>
    </Router>
  );
};

export default App;
