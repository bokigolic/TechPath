// File: HtmlCss.js
import React, { useState } from "react";
import "../../styles/HtmlCss.css";

const HtmlCss = () => {

  // Dodavanje stanja za kviz
  const [showQuiz, setShowQuiz] = useState(false); // Da li je kviz aktivan
  const [score, setScore] = useState(0); // Rezultat korisnika
  const [currentQuestion, setCurrentQuestion] = useState(0); // Trenutno pitanje


  const sections = [
    {
      id: "html-structure",
      title: "HTML Structure",
      content:
        "HTML documents have a basic structure consisting of <!DOCTYPE>, <html>, <head>, and <body>. This defines the foundation of every web page.",
      example: `<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`,
    },
    {
      id: "html-elements-tags",
      title: "HTML Elements and Tags",
      content:
        "HTML uses elements and tags like <h1>, <p>, <div>, and <span> to structure content and define its meaning.",
      example: `<div>
  <h1>Main Title</h1>
  <p>This is a paragraph inside a div.</p>
</div>`,
    },
    {
      id: "html-text-links",
      title: "Text and Links",
      content:
        "Text formatting includes <strong> for bold, <em> for emphasis, and <a> for links. Links direct users to other pages.",
      example: `<p>This is <strong>bold text</strong> and <em>emphasized text</em>.</p>
<a href="https://example.com">Visit Example</a>`,
    },
    {
      id: "html-images",
      title: "Images and Multimedia",
      content:
        "Use the <img> tag for images, and <audio> or <video> tags for multimedia content.",
      example: `<img src="image.jpg" alt="Description of image">
<video controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`,
    },
    {
      id: "html-lists",
      title: "HTML Lists",
      content:
        "Unordered lists (<ul>) and ordered lists (<ol>) are used to group items. Use <li> for list items.",
      example: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ol>
  <li>First</li>
  <li>Second</li>
</ol>`,
    },
    {
      id: "html-tables",
      title: "HTML Tables",
      content:
        "Tables display tabular data using <table>, <tr> (rows), <th> (headers), and <td> (data cells).",
      example: `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
</table>`,
    },
    {
      id: "html-forms",
      title: "HTML Forms",
      content:
        "Forms collect user input using <form>, <input>, <textarea>, and <button>. Add <label> for accessibility.",
      example: `<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <button type="submit">Submit</button>
</form>`,
    },
    {
      id: "html-semantic",
      title: "Semantic HTML",
      content:
        "Semantic elements like <article>, <section>, <header>, and <footer> provide meaningful structure and improve accessibility.",
      example: `<section>
  <header>
    <h1>Article Title</h1>
  </header>
  <p>Article content goes here.</p>
</section>`,
    },
    {
      id: "css-selectors",
      title: "CSS Selectors and Declarations",
      content:
        "Selectors target HTML elements, while declarations define their styles using properties like color, margin, and padding.",
      example: `p {
  color: blue;
  margin: 10px;
}`,
    },
    {
      id: "css-box-model",
      title: "CSS Box Model",
      content:
        "The box model includes margin, border, padding, and content. It defines the layout and spacing of elements.",
      example: `div {
  margin: 20px;
  border: 2px solid black;
  padding: 15px;
}`,
    },
    {
      id: "css-layout",
      title: "CSS Layout (Flexbox and Grid)",
      content:
        "Flexbox and Grid are powerful tools for creating responsive layouts. Flexbox is for one-dimensional layouts, while Grid is for two-dimensional.",
      example: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    },
    {
      id: "css-typography",
      title: "CSS Typography",
      content:
        "CSS allows you to style text using properties like font-family, font-size, font-weight, and text-align.",
      example: `h1 {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
}`,
    },
    {
      id: "css-colors",
      title: "CSS Colors and Backgrounds",
      content:
        "Define colors using hexadecimal, RGB, or HSL values. Add background images or gradients for styling.",
      example: `body {
  background: linear-gradient(to right, red, yellow);
}`,
    },
    {
      id: "css-responsive",
      title: "CSS Responsive Design",
      content:
        "Use media queries to apply styles based on device size for a responsive layout.",
      example: `@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}`,
    },
    {
      id: "css-animations",
      title: "CSS Animations and Transitions",
      content:
        "CSS transitions and animations add interactive effects. Use keyframes for detailed animations.",
      example: `div {
  transition: background-color 0.3s ease;
}
div:hover {
  background-color: yellow;
}`,
    },
  ];

  const quizQuestions = [
    {
      question: "What does <!DOCTYPE html> represent in an HTML document?",
      options: [
        "It defines the language of the document.",
        "It specifies the version of HTML.",
        "It starts the HTML body.",
        "It is used to link external files.",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which tag is used for creating hyperlinks?",
      options: ["<a>", "<link>", "<href>", "<nav>"],
      correctAnswer: 0,
    },
    {
      question: "What property in CSS is used to change the background color?",
      options: ["color", "background-color", "bg-color", "back-color"],
      correctAnswer: 1,
    },
  ];

  const handleAnswerClick = (index) => {
    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz completed! Your score: ${score + 1}/${quizQuestions.length}`);
      setScore(0);
      setCurrentQuestion(0);
      setShowQuiz(false);
    }
  };

  return (
    <div className="html-css-container">
      {/* Left Navigation */}
      <nav className="left-nav">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a className="nav-link" href={`#${section.id}`}>
                {section.title}
              </a>
            </li>
          ))}
          <li>
            <button
              className="quiz-button"
              onClick={() => setShowQuiz(!showQuiz)}
            >
              {showQuiz ? "Close Quiz" : "Start Quiz"}
            </button>
          </li>
        </ul>
      </nav>

      {/* Content Sections */}
      <div className="content-area">
        {sections.map((section) => (
          <section id={section.id} key={section.id} className="content-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            <pre>
              <code>{section.example}</code>
            </pre>
          </section>
        ))}

        {/* Quiz Section */}
        {showQuiz && (
          <div className="quiz-section">
            <h2>Quiz: Test Your Knowledge</h2>
            <p>{quizQuestions[currentQuestion].question}</p>
            <ul>
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <button
                    className="quiz-option"
                    onClick={() => handleAnswerClick(index)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HtmlCss;