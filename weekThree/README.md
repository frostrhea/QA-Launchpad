<h1 style="color: #4c8a46;">🚀 QA Launchpad Program </h1>

## Week 3 - Assertions & Validations
This week covers test automation focusing on assertions and validations by using Playwright for web applications. Includes understanding how to use assertions to verify, creating manual test case document, and automating the same test cases.

### a. Programming Language

- JavaScript (Node.js) v22.14.0

### b. How to Run the Scripts
1. Open PowerShell or Command Prompt.
2. Change to the weekThree folder:
3. Run a single spec:
   ```
   npx playwright test tests\<file_name>.spec.js
   ```
4. Run with a specific project/browser:
   ```
   npx playwright test tests\<file_name>.spec.js --project=chromium
   ```
5. Run headed (visible browser):
   ```
   npx playwright test tests\<file_name>.spec.js --headed
   ```
6. Debug / inspector:
   ```
   npx playwright test tests\<file_name>.spec.js --debug
   ```
7. Reports & UI: **UI is really convenient to use!**
   ```
   npx playwright show-report
   npx playwright test --ui  
   ```
----

### c. Notes / Challenges
#### Some Learnings:
- Assertions and validations are used to keep check of the system if its behaving the way it is expected. **Assertions** strictly checks such that if it fails, it would stop executing immediately. While **validations** are quite lenient and will just tell whether it passed or failed then continues executing the test. As for Playwright, it doesn't have validations or soft assert by default but it can simulated using try/catch.
- As for implicit and explicit assertions, these are how, how much control, and when an assertion is performed. **Implicit assertions** is performed automatically by the tool or framework, such as toBeVisible() by Playwright. No other stuff needed such as how long to wait, how often, and how to retry. As for **explicit assertions**, you manually check that a condition is true and you control the flow. An example of this is checking the value of a locator, then you add retry if the value is still not true.

##### Quick examples:
- Implicit (Playwright-style):
  ```
  await expect(locator).toBeVisible();
  ```
- Explicit (manual check):
  ```
  const isVisible = await page.locator('#banner').isVisible();
  expect(isVisible).toBeTruthy();
  ```


#### Challenges Encountered (from my experience)
- Finding stable practice sites that are free and provide a moderate challenge — many demo sites are either too simple or limited in features.
- Configuring a unified Playwright setup across folders so tests can share fixtures and assets (had to adjust file paths and npm scripts).
- Handling file uploads in automation — needed to use Playwright's file chooser APIs and verify image previews via data URL checks.
