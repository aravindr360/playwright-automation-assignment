# Playwright TypeScript Automation Assignment

A data-driven web automation testing framework built using **Playwright** and **TypeScript**. This project automates and validates login functionality, UI elements, navigation flows, and form behavior using externalized test data.

## Application Under Test

* **Website:** Practice Test Automation – Login Portal
* **URL:** https://practicetestautomation.com/practice-test-login/

---

## Project Structure

```text
playwright-assignment/
├── tests/
│   └── loginTests.spec.ts
├── testData.json
├── playwright.config.ts
├── package.json
└── README.md
```

### Description

* **loginTests.spec.ts** – Contains all automated test scenarios.
* **testData.json** – Stores test credentials and validation messages.
* **playwright.config.ts** – Framework configuration and browser setup.
* **package.json** – Project dependencies and scripts.

---

## Test Coverage

The framework contains **10 automated test cases** executed across:

* Chromium
* Firefox
* WebKit

This results in **30 total test executions** during a complete run.

| Test ID | Scenario                                                     | Type                  |
| ------- | ------------------------------------------------------------ | --------------------- |
| TC01    | Verify successful login with valid credentials               | Positive              |
| TC02    | Verify error message for invalid username                    | Negative              |
| TC03    | Verify error message for incorrect password                  | Negative              |
| TC04    | Verify validation when submitting empty fields               | Negative              |
| TC05    | Verify successful logout after login                         | End-to-End            |
| TC06    | Verify visibility of username, password, and submit controls | UI Validation         |
| TC07    | Verify page title                                            | Structural Validation |
| TC08    | Verify login page heading text                               | Content Validation    |
| TC09    | Verify password field uses masked input (`type="password"`)  | Security Validation   |
| TC10    | Verify username field accepts and retains entered text       | Form Interaction      |

---

## Features Implemented

### Data-Driven Testing

All test data is maintained in an external JSON file to improve maintainability and reusability.

### BeforeEach Hook

A common setup routine is executed before every test to ensure isolation and consistency.

### Playwright Semantic Locators

Uses Playwright's recommended locator strategies such as:

```typescript
getByRole()
getByText()
locator()
```

to improve test reliability and readability.

### Cross-Browser Testing

The suite is configured to run on:

* Chromium
* Firefox
* WebKit

---

## Prerequisites

Install the following before running the project:

* Node.js (v18 or later)
* npm

Verify installation:

```bash
node -v
npm -v
```

---

## Installation

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

### Headed Execution

Runs tests with browser UI visible:

```bash
npx playwright test --headed --workers=2
```

### Headless Execution

Runs tests in the background:

```bash
npx playwright test
```

### Run Specific Browser

Example:

```bash
npx playwright test --project=chromium
```

---

## Test Report

Open the Playwright HTML report:

```bash
npx playwright show-report
```

The report provides:

* Pass/Fail status
* Execution timeline
* Test duration
* Failure details
* Screenshots (if configured)

---

## Automation Practices Followed

* Data-driven testing
* Reusable test structure
* Test isolation using hooks
* Meaningful assertions
* Cross-browser execution
* Readable naming conventions
* Externalized test data
* Minimal code duplication

---

## AI Usage Disclosure

As permitted by the assignment guidelines:

* Test scenarios, project setup, and automation logic were developed manually.
* AI tools were used only for concept clarification, syntax verification, and documentation refinement.
* The automation workflow, validation logic, and execution structure were independently understood and implemented.

Estimated AI assistance: less than 30%.

---

## Author

Aravind R

Playwright Automation Assignment Submission
