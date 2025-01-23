// File: HtmlCss.js
import React, { useState } from 'react';
import '../../styles/HtmlCss.css';

const HtmlCss = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'html-intro',
      title: 'Introduction to HTML',
      content: 'HTML (HyperText Markup Language) is the foundation of every web page. It defines the structure of web pages using a system of elements and attributes.',
      example: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    <h1>This is a Heading</h1>\n    <p>This is a paragraph.</p>\n  </body>\n</html>',
      url: 'https://www.w3schools.com/html/html_intro.asp'
    },
    {
      id: 'html-structure',
      title: 'HTML Document Structure',
      content: 'An HTML document includes the DOCTYPE declaration, head, and body sections. These are essential for creating a well-structured webpage.',
      example: '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <!-- Content goes here -->\n  </body>\n</html>',
      url: 'https://www.w3schools.com/html/html_document.asp'
    },
    {
      id: 'html-common-tags',
      title: 'Common HTML Tags',
      content: 'Tags like <h1> to <h6>, <p>, <ul>, <ol>, <a>, and <img> are frequently used to structure and link content on a webpage.',
      example: '<h1>Heading</h1>\n<p>Paragraph</p>\n<ul>\n  <li>List Item 1</li>\n  <li>List Item 2</li>\n</ul>',
      url: 'https://www.w3schools.com/html/html_elements.asp'
    },
    {
      id: 'html-forms',
      title: 'HTML Forms and Input',
      content: 'Forms allow users to submit data using elements such as <form>, <input>, <label>, and <textarea>.',
      example: '<form>\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name">\n  <input type="submit" value="Submit">\n</form>',
      url: 'https://www.w3schools.com/html/html_forms.asp'
    },
    {
      id: 'html-semantic',
      title: 'Semantic HTML',
      content: 'Semantic tags like <header>, <footer>, <article>, and <section> improve accessibility and search engine optimization.',
      example: '<header>\n  <h1>Website Header</h1>\n</header>\n<section>\n  <article>\n    <h2>Article Title</h2>\n    <p>Article content...</p>\n  </article>\n</section>',
      url: 'https://www.w3schools.com/html/html5_semantic_elements.asp'
    },
    {
      id: 'css-intro',
      title: 'Introduction to CSS',
      content: 'CSS (Cascading Style Sheets) is used to style HTML elements by applying colors, fonts, and layout techniques.',
      example: 'body {\n  font-family: Arial, sans-serif;\n  color: #333;\n}\nh1 {\n  color: blue;\n}',
      url: 'https://www.w3schools.com/css/css_intro.asp'
    },
    {
      id: 'css-box-model',
      title: 'CSS Box Model',
      content: 'The CSS box model describes the rectangular boxes generated for elements. It includes margin, border, padding, and content.',
      example: 'div {\n  margin: 10px;\n  border: 1px solid black;\n  padding: 20px;\n  width: 100px;\n}',
      url: 'https://www.w3schools.com/css/css_boxmodel.asp'
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="html-css-container">
      {/* Left Navigation */}
      <nav className="left-nav">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <button className="nav-button" onClick={() => toggleSection(section.id)}>
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Area */}
      <div className="content-area">
        {sections.map((section) => (
          <div key={section.id} className="content-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            {activeSection === section.id && (
              <div className="accordion-content">
                <pre><code>{section.example}</code></pre>
                <a href={section.url} target="_blank" rel="noopener noreferrer">Learn more</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HtmlCss;


