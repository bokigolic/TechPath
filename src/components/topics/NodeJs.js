// File: Node.js
import React, { useState } from "react";
import "../../styles/NodeJs.css";

const NodeJS = () => {
  const sections = [
    {
      id: "node-intro",
      title: "Introduction to Node.js",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling the creation of scalable, high-performance applications.",
      example: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});`,
    },
    {
      id: "node-npm",
      title: "Node.js and NPM",
      content:
        "Node Package Manager (NPM) is a tool that helps manage packages (libraries) in Node.js. It allows you to easily install, update, and share packages.",
      example: `$ npm init -y
$ npm install express`,
    },
    {
      id: "node-async",
      title: "Asynchronous JavaScript",
      content:
        "Node.js uses an event-driven, non-blocking I/O model. Understanding callback functions, Promises, and async/await is crucial for handling asynchronous operations effectively.",
      example: `const fs = require('fs');

// Callback
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// Async/Await
async function readFileAsync() {
  const data = await fs.promises.readFile('file.txt');
  console.log(data.toString());
}`,
    },
    {
      id: "node-modules",
      title: "Modules in Node.js",
      content:
        "Modules are reusable blocks of code. Node.js has built-in modules (like fs, http), and you can also create custom modules.",
      example: `// myModule.js
module.exports = {
  sayHello: () => console.log('Hello from the module!'),
};

// app.js
const myModule = require('./myModule');
myModule.sayHello();`,
    },
    {
      id: "node-files",
      title: "Working with Files",
      content:
        "The File System (fs) module allows you to interact with the file system by reading, writing, deleting, and manipulating files and directories.",
      example: `const fs = require('fs');

// Write to a file
fs.writeFileSync('example.txt', 'Hello, Node.js');

// Read a file
const data = fs.readFileSync('example.txt');
console.log(data.toString());`,
    },
    {
      id: "node-server",
      title: "HTTP Server",
      content:
        "The HTTP module allows you to create a web server. You can use it to handle HTTP requests and responses.",
      example: `const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello, Node.js!</h1>');
}).listen(3000);`,
    },
    {
      id: "node-express",
      title: "Express.js Framework",
      content:
        "Express.js is a popular framework for building web applications and APIs. It simplifies routing, middleware, and request/response handling.",
      example: `const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello, Express!'));

app.listen(3000, () => console.log('Server running on port 3000'));`,
    },
    {
      id: "node-database",
      title: "Databases in Node.js",
      content:
        "Node.js works with both SQL and NoSQL databases. MongoDB (NoSQL) and PostgreSQL/MySQL (SQL) are commonly used.",
      example: `const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const User = mongoose.model('User', { name: String });

const user = new User({ name: 'John' });
user.save().then(() => console.log('User saved!'));`,
    },
    {
      id: "node-auth",
      title: "Authentication and Authorization",
      content:
        "Implement token-based authentication with JSON Web Tokens (JWT) or OAuth for securing APIs.",
      example: `const jwt = require('jsonwebtoken');

// Generate Token
const token = jwt.sign({ userId: 123 }, 'secretkey', { expiresIn: '1h' });
console.log(token);

// Verify Token
jwt.verify(token, 'secretkey', (err, decoded) => {
  if (err) console.error(err);
  console.log(decoded);
});`,
    },
    {
      id: "node-websockets",
      title: "Web Sockets",
      content:
        "Use Socket.io for real-time communication between clients and the server.",
      example: `const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('message', (msg) => console.log(msg));
});`,
    },
  ];

  return (
    <div className="node-container">
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

export default NodeJS;
