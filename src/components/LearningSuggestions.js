import React, { useEffect } from "react";
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

  return (
    <div className="learning-suggestions">
      <h2 className="suggestions-title">What You Can Learn</h2>
      <div className="suggestions-list">
        {[
          { title: "HTML & CSS Basics", text: "Start your web development journey by mastering the structure and styling of websites." },
          { title: "JavaScript Fundamentals", text: "Learn how to make your websites interactive and dynamic using JavaScript." },
          { title: "React Framework", text: "Build modern, efficient, and scalable front-end applications with React." },
          { title: "Node.js & Backend Basics", text: "Understand server-side programming and build powerful backend systems." },
          { title: "Version Control with Git", text: "Learn to collaborate effectively by mastering Git and GitHub." },
        ].map((item, index) => (
          <div className="suggestion-item" style={{ height: "500px" }} key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningSuggestions;
