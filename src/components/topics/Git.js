// File: Git.js
import React, { useState } from "react";
import "../../styles/Git.css";

const Git = () => {
  const sections = [
    {
      id: "git-basics",
      title: "Git Basics",
      content: `Git is a version control system used to manage changes in source code. It allows developers to track changes, collaborate, and manage their code efficiently.`,
      example: `# Initialize a new Git repository
$ git init

# Add all changes to the staging area
$ git add .

# Commit changes
$ git commit -m "Initial commit"

# Check the status of the repository
$ git status`,
    },
    {
      id: "git-branches",
      title: "Working with Branches",
      content: `Branches allow you to work on different features or fixes independently. This is especially useful for collaborative development.`,
      example: `# Create a new branch
$ git branch feature-branch

# Switch to the new branch
$ git checkout feature-branch

# Merge the branch into the main branch
$ git merge feature-branch`,
    },
    {
      id: "remote-repos",
      title: "Remote Repositories",
      content: `Remote repositories like GitHub allow you to host your code and collaborate with others. Push and pull commands are used to sync changes.`,
      example: `# Add a remote repository
$ git remote add origin https://github.com/username/repo.git

# Push changes to the remote repository
$ git push origin main

# Pull changes from the remote repository
$ git pull origin main`,
    },
    {
      id: "git-advanced",
      title: "Advanced Git Techniques",
      content: `Advanced features like rebasing and cherry-picking allow you to manipulate the commit history and apply specific changes.`,
      example: `# Rebase current branch onto main
$ git rebase main

# Cherry-pick a specific commit
$ git cherry-pick <commit-hash>`,
    },
    {
      id: "tags-releases",
      title: "Tags and Releases",
      content: `Tags are used to mark specific points in the repository's history, like version releases. GitHub Releases extend this by providing downloadable assets.`,
      example: `# Create a lightweight tag
$ git tag v1.0.0

# Push the tag to the remote repository
$ git push origin v1.0.0`,
    },
    {
      id: "github-features",
      title: "GitHub Features",
      content: `GitHub provides tools like forks, pull requests, issues, and project boards to streamline collaboration.`,
      example: `# Fork a repository on GitHub
# Create a pull request from your fork to the original repository

# Use GitHub Issues to track bugs and features
# Organize tasks using GitHub Project Boards`,
    },
    {
      id: "github-actions",
      title: "GitHub Actions",
      content: `GitHub Actions allow you to automate workflows such as testing and deployment using CI/CD pipelines.`,
      example: `# Sample GitHub Actions YAML
name: Node.js CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm test`,
    },
    {
      id: "security",
      title: "Security and Privacy",
      content: `Maintaining security on GitHub is critical. Use best practices like enabling two-factor authentication and managing access tokens properly.`,
      example: `# Enable two-factor authentication in GitHub settings

# Generate a personal access token for CLI authentication
$ gh auth login --with-token`,
    },
    {
      id: "git-hooks",
      title: "Git Hooks",
      content: `Git Hooks are scripts that automatically run on specific Git events, such as before committing or pushing.`,
      example: `# Sample pre-commit hook
#!/bin/sh
echo "Running tests..."
npm test`,
    },
    {
      id: "git-flow",
      title: "Git Flow",
      content: `Git Flow is a workflow for managing feature development, hotfixes, and releases in a structured manner.`,
      example: `# Initialize Git Flow
$ git flow init

# Start a new feature
$ git flow feature start my-feature

# Finish the feature
$ git flow feature finish my-feature`,
    },
  ];

  return (
    <div className="git-container">
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

export default Git;
