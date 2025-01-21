import React from "react";
import "../../styles/HtmlCss.css";

const HtmlCss = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <i className="fas fa-code"></i> Learn Front-End
        </div>
        <nav>
          <ul>
            <li><a href="#html-section">HTML</a></li>
            <li><a href="#css-section">CSS</a></li>
            <li><a href="#resources-section">Resources</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Front-End Basics</h1>
        <p>Start your journey with the foundations of web development: HTML and CSS.</p>
        <a href="#html-section" className="btn">Get Started</a>
      </section>

      {/* HTML Section */}
      <section id="html-section" className="content-section">
        <h2><i className="fas fa-html5"></i> Introduction to HTML</h2>
        <p>
          HTML (<strong>HyperText Markup Language</strong>) is the standard markup language for creating web pages.
          It defines the structure of your content and allows you to organize text, images, links, and more.
        </p>

        <h3>Basic Structure of an HTML Document:</h3>
        <pre className="code-block">
          &lt;!DOCTYPE html&gt;<br />
          &lt;html&gt;<br />
          &nbsp;&nbsp;&lt;head&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Page Title&lt;/title&gt;<br />
          &nbsp;&nbsp;&lt;/head&gt;<br />
          &nbsp;&nbsp;&lt;body&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello World!&lt;/h1&gt;<br />
          &nbsp;&nbsp;&lt;/body&gt;<br />
          &lt;/html&gt;
        </pre>

        <p>Every HTML document has three main parts:</p>
        <ul>
          <li><strong>&lt;html&gt;</strong>: The root element that contains all other elements.</li>
          <li><strong>&lt;head&gt;</strong>: Contains meta-information about the document (title, styles, etc.).</li>
          <li><strong>&lt;body&gt;</strong>: Contains the visible content of the webpage.</li>
        </ul>

        <h3>Interactive Examples:</h3>
        <p>Try writing some basic HTML yourself on these platforms:</p>
        <ul>
          <li><a href="https://www.w3schools.com/html/html_editors.asp" target="_blank" rel="noopener noreferrer">W3Schools Online Editor</a></li>
          <li><a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">CodePen</a></li>
        </ul>
      </section>

      {/* CSS Section */}
      <section id="css-section" className="content-section dark-bg">
        <h2><i className="fab fa-css3-alt"></i> Introduction to CSS</h2>
        <p>
          CSS (<strong>Cascading Style Sheets</strong>) is the language used to style HTML content. With CSS, you can control colors, fonts, layouts, spacing, and much more.
        </p>

        <h3>Basic Structure of a CSS Rule:</h3>
        <pre className="code-block">
          selector &#123;<br />
          &nbsp;&nbsp;property: value;<br />
          &#125;
        </pre>
        <p>Example:</p>
        <pre className="code-block">
          h1 &#123;<br />
          &nbsp;&nbsp;color: blue;<br />
          &nbsp;&nbsp;font-size: 24px;<br />
          &#125;
        </pre>

        <h3>CSS Selectors:</h3>
        <ul>
          <li><strong>Element Selector</strong>: Targets all elements of a specific type (e.g., <code>p</code>).</li>
          <li><strong>Class Selector</strong>: Targets elements with a specific class (e.g., <code>.my-class</code>).</li>
          <li><strong>ID Selector</strong>: Targets an element with a unique ID (e.g., <code>#my-id</code>).</li>
        </ul>

        <h3>Interactive Examples:</h3>
        <p>Explore CSS with live editors:</p>
        <ul>
          <li><a href="https://www.w3schools.com/css/css_syntax.asp" target="_blank" rel="noopener noreferrer">W3Schools CSS Basics</a></li>
          <li><a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer">CSS Tricks</a></li>
        </ul>
      </section>

      {/* Resources Section */}
      <section id="resources-section" className="content-section">
        <h2><i className="fas fa-book"></i> Additional Resources</h2>
        <p>Deepen your knowledge of HTML and CSS with these resources:</p>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN: HTML Documentation</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">MDN: CSS Documentation</a></li>
          <li><a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">W3Schools</a></li>
          <li><a href="https://frontendmentor.io/" target="_blank" rel="noopener noreferrer">Frontend Mentor</a></li>
          <li><a href="https://freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Learn Front-End. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HtmlCss;
