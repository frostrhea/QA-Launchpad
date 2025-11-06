<h1 style="color: #4c8a46;">🚀 QA Launchpad Program </h1>

## Week 1 - Setting Up & Running Your First Automation Test Resources 
This week covers test automation using Playwright for web applications. Includes locator strategies, running tests, and some tips I learned for stable selectors.

### a. Environment
- Node.js v22.14.0 (as used in Week 1)
- Playwright (installed via npm)
----
### b.  How to run Playwright tests (Windows)
1. Open PowerShell or Command Prompt.
2. Change to the weekTwo folder:
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
#### Locators:
- ID locators are easy to find and perhaps most reliable. The downsides I see is that not all elements contains this so there's a need to resort to other locator strat.

- Concept of CSS selectors was quite confusing when comparing its difference to other types of locators. But essentially, CSS selectors are just made up of one or more parts (such as attributes, tags, and relationships) combined to describe a specific element. That's why it may look similar when compared as it contains a part of it.

- Class locators are quite simple to get but since it is a class, other elements may have the exact same type so there's a need to combine it with other attributes such as name or id.  Also it may be very looooong. Alsooo, don't forget the dots!

- XPath locators are also easy to get just by using _Copy XPath_ and among the powerful as it can navigate the DOM structure. It can get pretty looooooooong and like reading an ancient language tho, but it gets the job done. Prone to DOM changes breakage so usually used only as a last resort.

#### Locator strategy — quick rules
- ✅ Use ID when element has a unique, stable id.
- ✅ Use CSS selectors for combinations and flexibility.
- ⚠️ Use Class only if unique or combined with other attributes.
- ⚠️ Use XPath only as a last resort (when CSS cannot express the condition).

#### Some additional notes:
In CSS:
- `.` = class selector
- `#` = id selector
- `no prefix` = tag selector

| Selector           | Meaning                                                    |
| ------------------ | ---------------------------------------------------------- |
| `button`           | HTML tag `<button>`                                        |
| `.btn`             | Any element with class `btn`                               |
| `#login`           | Element with ID `login`                                    |
| `.btn.btn-primary` | Element that has **both** classes: `btn` and `btn-primary` |


