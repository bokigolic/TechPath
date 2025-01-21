
import React from "react";

const HtmlCss = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>HTML & CSS Basics</h1>
      <p>
        Learn the fundamentals of building and styling websites with HTML and CSS.
        Create structure and add visual flair to your pages.
      </p>
      <h2>Examples:</h2>
      <div>
        <h3>HTML Example:</h3>
        <pre>
          {`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`}
        </pre>
        <h3>CSS Example:</h3>
        <pre>
          {`h1 {
  color: blue;
  text-align: center;
}`}
        </pre>
      </div>
    </div>
  );
};

export default HtmlCss;
