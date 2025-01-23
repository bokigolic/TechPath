// File: React.js
import React, { useState } from "react";
import "../../styles/React.css";

const ReactJS = () => {
  const sections = [
    {
      id: "react-intro",
      title: "Introduction to React",
      content:
        "React.js is a JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create reusable components that manage their own state.",
      example: `function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}`,
    },
    {
      id: "react-jsx",
      title: "JSX",
      content:
        "JSX is a syntax extension for JavaScript that allows writing HTML elements directly within JavaScript code. It makes the code more readable and easier to write.",
      example: `const element = <h1>Hello, world!</h1>;`,
    },
    {
      id: "react-components",
      title: "Components and Props",
      content:
        "Components are reusable blocks of code in React. Props allow you to pass data from a parent component to a child component.",
      example: `function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
<Welcome name="John" />`,
    },
    {
      id: "react-state",
      title: "State and Lifecycle",
      content:
        "State is used to manage dynamic data within a component. The useState hook allows functional components to have state.",
      example: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
    },
    {
      id: "react-hooks",
      title: "React Hooks",
      content:
        "Hooks like useState and useEffect enable functional components to use state and lifecycle methods.",
      example: `import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>Hello, React!</h1>;
}`,
    },
    {
      id: "react-routing",
      title: "Routing with React Router",
      content:
        "React Router enables dynamic navigation in a React application without refreshing the page.",
      example: `import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}`,
    },
    {
      id: "react-context",
      title: "Context API",
      content:
        "The Context API allows you to share data across the component tree without prop-drilling.",
      example: `import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
}`,
    },
    {
      id: "react-performance",
      title: "Performance Optimization",
      content:
        "Use tools like React.memo, useMemo, and useCallback to avoid unnecessary re-renders and optimize performance.",
      example: `import React, { useMemo } from "react";

function ExpensiveComputation({ number }) {
  const result = useMemo(() => {
    return number ** 2; // Expensive computation
  }, [number]);

  return <p>Result: {result}</p>;
}`,
    },
    {
      id: "react-forms",
      title: "Forms and Validation",
      content:
        "Manage forms using useState or libraries like Formik. Use validation libraries like Yup for schema validation.",
      example: `import { useState } from "react";

function Form() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted value: " + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`,
    },
    {
      id: "react-testing",
      title: "Testing",
      content:
        "Use Jest and React Testing Library to test React components and ensure they work as expected.",
      example: `import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});`,
    },
  ];

  return (
    <div className="react-container">
      <nav className="left-nav">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a className="nav-link" href={`#${section.id}`}>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
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
      </div>
    </div>
  );
};

export default ReactJS;
