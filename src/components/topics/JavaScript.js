import React from "react";
import "../../styles/JavaScript.css";

const JavaScript = () => {
  return (
    <div className="javascript-container">
      {/* Navigation Section */}
      <nav className="javascript-nav">
        <h2>Navigation</h2>
        <ul>
          <li><a href="#variables">Variables and Data Types</a></li>
          <li><a href="#operations">Operations</a></li>
          <li><a href="#control-flow">Control Flow</a></li>
          <li><a href="#functions">Functions</a></li>
          <li><a href="#dom-manipulation">DOM Manipulation</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#async-js">Asynchronous JavaScript</a></li>
          <li><a href="#es6-features">ES6+ Features</a></li>
          <li><a href="#modules">Modules</a></li>
          <li><a href="#web-api">Web API</a></li>
          <li><a href="#debugging">Debugging Basics</a></li>
        </ul>
      </nav>

      {/* Main Content Section */}
      <main className="javascript-main">
        {/* Previous sections omitted for brevity */}
        <section id="variables">
          <h1>Variables and Data Types</h1>
          <p>
            JavaScript variables are used to store data values. Variables can hold different data types, including:
          </p>
          <ul>
            <li><b>String:</b> Represents text. Example: <code>let name = "John";</code></li>
            <li><b>Number:</b> Represents numeric values. Example: <code>let age = 30;</code></li>
            <li><b>Boolean:</b> Represents true/false. Example: <code>let isAdmin = true;</code></li>
            <li><b>Object:</b> Represents a collection of data. Example: <code>let user = &#123; name: "John", age: 30 &#125;;</code></li>
            <li><b>Array:</b> Represents a list of values. Example: <code>let colors = ["red", "blue", "green"];</code></li>
          </ul>
          <pre>
            <code>
              {`// Example
let name = "Alice"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let user = { name: "Alice", age: 25 }; // Object
let fruits = ["apple", "banana", "cherry"]; // Array`}
            </code>
          </pre>
        </section>

        <section id="operations">
          <h1>Operations</h1>
          <p>
            JavaScript supports various types of operations:
          </p>
          <ul>
            <li><b>Arithmetic:</b> <code>+, -, *, /, %</code></li>
            <li><b>Comparison:</b> <code>==, ===, !=, !==, &gt;, &lt;, &gt;=, &lt;=</code></li>
            <li><b>Logical:</b> <code>&& (AND), || (OR), ! (NOT)</code></li>
            <li><b>String:</b> Use <code>+</code> to concatenate strings. Example: <code>"Hello" + " World"</code></li>
          </ul>
          <pre>
            <code>
              {`// Example
let sum = 5 + 3; // 8
let isEqual = (5 === 5); // true
let fullName = "John" + " " + "Doe"; // "John Doe"`}
            </code>
          </pre>
        </section>

        <section id="control-flow">
          <h1>Control Flow</h1>
          <p>
            JavaScript uses conditional statements and loops to control the flow of execution:
          </p>
          <ul>
            <li><b>If-Else:</b> Executes code based on conditions.</li>
            <li><b>Switch:</b> Executes one of many blocks of code based on a value.</li>
            <li><b>Loops:</b> Repeats blocks of code (e.g., <code>for</code>, <code>while</code>, <code>do-while</code>).</li>
          </ul>
          <pre>
            <code>
              {`// Example
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}`}
            </code>
          </pre>
        </section>

        <section id="functions">
          <h1>Functions</h1>
          <p>
            Functions are blocks of code designed to perform specific tasks.
          </p>
          <ul>
            <li><b>Declaration:</b> <code>function name(params) &#123; ... &#125;</code></li>
            <li><b>Arrow Functions:</b> Concise syntax using <code>=&gt;</code>. Example: <code>const add = (a, b) =&gt; a + b;</code></li>
          </ul>
          <pre>
            <code>
              {`// Example
function greet(name) {
  return "Hello " + name;
}

const add = (a, b) => a + b;

console.log(greet("Alice")); // Hello Alice
console.log(add(3, 5)); // 8`}
            </code>
          </pre>
        </section>
        {/* DOM Manipulation */}
        <section id="dom-manipulation">
          <h1>DOM Manipulation</h1>
          <p>
            The Document Object Model (DOM) is a programming interface for HTML documents. With JavaScript, you can select, modify, add, or remove elements dynamically.
          </p>
          <ul>
            <li>
              <b>Selecting Elements:</b> Use <code>document.querySelector()</code>, <code>document.getElementById()</code>, etc.
            </li>
            <li>
              <b>Changing Content:</b> Use <code>textContent</code>, <code>innerHTML</code>, or <code>setAttribute</code>.
            </li>
            <li>
              <b>Adding/Removing Elements:</b> Use methods like <code>appendChild</code>, <code>removeChild</code>, or modern <code>append()</code>.
            </li>
          </ul>
          <pre>
            <code>
              {`// Example: Changing the content of an element
const heading = document.querySelector("h1");
heading.textContent = "New Heading";

// Adding a new element
const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph!";
document.body.appendChild(newPara);

// Removing an element
const oldPara = document.querySelector("p");
document.body.removeChild(oldPara);`}
            </code>
          </pre>
        </section>

        {/* Events */}
        <section id="events">
          <h1>Events</h1>
          <p>
            Events in JavaScript allow you to listen for user interactions and perform actions.
          </p>
          <ul>
            <li>
              <b>Listening to Events:</b> Use <code>addEventListener</code> to attach events to elements.
            </li>
            <li>
              <b>Common Events:</b> <code>click</code>, <code>input</code>, <code>mouseover</code>, etc.
            </li>
          </ul>
          <pre>
            <code>
              {`// Example: Handling a button click
const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// Event Propagation
document.querySelector("div").addEventListener("click", (e) => {
  e.stopPropagation(); // Stops bubbling
  console.log("Div clicked");
});`}
            </code>
          </pre>
        </section>

        {/* Asynchronous JavaScript */}
        <section id="async-js">
          <h1>Asynchronous JavaScript</h1>
          <p>
            JavaScript provides mechanisms for handling asynchronous tasks, such as fetching data or performing long-running operations.
          </p>
          <ul>
            <li>
              <b>Promises:</b> A way to handle async operations. Use <code>.then()</code> and <code>.catch()</code>.
            </li>
            <li>
              <b>Async/Await:</b> A cleaner syntax for working with Promises.
            </li>
            <li>
              <b>Fetch API:</b> Used to make HTTP requests.
            </li>
          </ul>
          <pre>
            <code>
              {`// Example: Fetching data
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Using async/await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`}
            </code>
          </pre>
        </section>

        {/* ES6+ Features */}
        <section id="es6-features">
          <h1>ES6+ Features</h1>
          <p>
            ES6 introduced many features to simplify and enhance JavaScript development.
          </p>
          <ul>
            <li><b>Let and Const:</b> Block-scoped variables.</li>
            <li><b>Template Literals:</b> Easier string formatting using backticks (<code>`</code>).</li>
            <li><b>Destructuring:</b> Extracting values from objects or arrays.</li>
            <li><b>Spread/Rest Operators:</b> Flexibly combine or split objects and arrays.</li>
          </ul>
          <pre>
            <code>
              {`// Example: Destructuring and Spread
const user = { name: "Alice", age: 30 };
const { name, age } = user;
console.log(name, age);

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);`}
            </code>
          </pre>
        </section>

        {/* Modules */}
        <section id="modules">
          <h1>Modules</h1>
          <p>
            JavaScript modules allow you to organize your code into separate files.
          </p>
          <ul>
            <li>
              <b>Export:</b> Make variables or functions available to other files.
            </li>
            <li>
              <b>Import:</b> Use exported code in another file.
            </li>
          </ul>
          <pre>
            <code>
              {`// Example: Exporting and Importing
// file1.js
export const greet = (name) => \`Hello \${name}\`;

// file2.js
import { greet } from "./file1.js";
console.log(greet("Alice"));`}
            </code>
          </pre>
        </section>

        {/* Web API */}
        <section id="web-api">
          <h1>Web API</h1>
          <p>
            JavaScript provides access to powerful browser features through Web APIs.
          </p>
          <ul>
            <li><b>Web Storage API:</b> Store data using <code>localStorage</code> and <code>sessionStorage</code>.</li>
            <li><b>Geolocation API:</b> Access user location.</li>
          </ul>
          <pre>
            <code>
              {`// Example: Using localStorage
localStorage.setItem("name", "Alice");
console.log(localStorage.getItem("name")); // Alice

// Example: Using Geolocation API
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});`}
            </code>
          </pre>
        </section>

        {/* Debugging Basics */}
        <section id="debugging">
          <h1>Debugging Basics</h1>
          <p>
            Debugging JavaScript involves finding and fixing errors using tools like Chrome DevTools.
          </p>
          <ul>
            <li>
              <b>Console:</b> Use <code>console.log()</code> to output information.
            </li>
            <li>
              <b>Breakpoints:</b> Pause code execution in DevTools for inspection.
            </li>
          </ul>
          <pre>
            <code>
              {`// Example: Console logging
console.log("Debugging");

// Example: Setting a breakpoint
function test() {
  debugger; // Pauses code execution here
  console.log("Test");
}
test();`}
            </code>
          </pre>
        </section>
      </main>
    </div>
  );
};

export default JavaScript;
