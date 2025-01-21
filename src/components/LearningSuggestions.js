import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/LearningSuggestions.css";

const LearningSuggestions = () => {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".suggestion-item");
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          item.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topics = [
    { title: "HTML & CSS Basics", name: "html-css", text: "Learn the basics of web structure and styling." },
    { title: "JavaScript Fundamentals", name: "javascript", text: "Master the language of interactivity." },
    { title: "React Framework", name: "react", text: "Build modern, efficient, and scalable applications." },
    { title: "Node.js & Backend Basics", name: "nodejs", text: "Learn server-side programming." },
    { title: "Version Control with Git", name: "git", text: "Master collaboration with Git and GitHub." },
  ];

  return (
    <div className="learning-suggestions">
      <h2 className="suggestions-title">What You Can Learn</h2>
      <div className="suggestions-list">
        {topics.map((topic, index) => (
          <div className="suggestion-item" key={index}>
            <h3>{topic.title}</h3>
            <p>{topic.text}</p>
            <Link to={`/topic/${topic.name}`} className="btn btn-primary">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningSuggestions;
