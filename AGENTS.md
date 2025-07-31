# Agents Code and Documentation Improvement Guide

This document is intended for automated code review and improvement using Codex or similar language models. Follow these guidelines to enhance code quality, correctness, readability, and documentation for all agents in this repository.

---

## Agent Overview

Agents in this codebase are modular, reusable components with the following standards:
- Each agent must have a single, well-defined purpose.
- Agents should be documented with clear docstrings, type annotations, and examples.
- Code and comments must be kept up-to-date and consistent.
- Each agent should be covered by meaningful tests.

---

## Automated Review & Improvement Instructions

Codex (or similar LLM), when reviewing this codebase, please do the following:

### 1. Code Quality
- Identify and fix typos in code, comments, and documentation.
- Detect and correct bugs or logic errors.
- Refactor repetitive or inefficient code, applying best practices per programming language.
- Ensure all functions, classes, and methods have accurate, comprehensive docstrings.

### 2. Documentation
- Check for mismatches between comments/docstrings and the code’s behavior.
- Ensure each agent file begins with a summary comment describing its purpose, inputs, outputs, and usage.
- Add example usages where missing.
- Make documentation concise and clear for both developers and LLMs.

### 3. Testing
- Propose at least one test improvement per agent: increase coverage, add edge case tests, or clarify assertions.
- Ensure all tests are well-documented and follow naming conventions.

### 4. Language Best Practices
- For **Python**: Use PEP 8, type hints, clear docstrings, and logging.
- For **JavaScript/TypeScript**: Use ES6+ syntax, consistent style (e.g., StandardJS or Airbnb), and JSDoc.
- For **Java**: Apply Google Java Style, add Javadoc, and use dependency injection where appropriate.
- For **Go**: Follow Effective Go, document all exported symbols, and use interfaces.
- For all languages: Validate and sanitize inputs, handle errors gracefully, and write modular, testable code.

### 5. Output Format
- For each file or agent reviewed, list:
    - **Typos fixed**
    - **Bugs fixed**
    - **Documentation improvements**
    - **Test improvements**
    - **Best practices applied**
- Include before/after code snippets where relevant.

---

## Example Codex Prompt

