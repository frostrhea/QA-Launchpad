<h1 style="color: #4c8a46;">🚀 QA Launchpad Series </h1>

## Week 1 - JavaScript

### a. Programming Language

- JavaScript (Node.js) v22.14.0

### b. How to Run the Scripts

1. Make sure Node.js is installed on your computer.
2. Open a terminal or command prompt.
3. Navigate to the `Javascript` folder:
   ```
   cd ~\Javascript
   ```
4. Run a script using Node.js, for example:
   ```
   node login_script.js
   node test_data_script.js
   node login_function.js
   ```

### c. Notes / Challenges

- Realizing that JavaScript has no built-in function to get user input and that it requires using a function `readline` or `prompt` for web-based. Example:
  ```
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
  });
  ```
- Learned how to check for special characters, uppercase, and numbers.
