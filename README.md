# ServeRest Cypress Automation

## About the Project

This project was developed as a technical assessment using the ServeRest application.

It demonstrates end-to-end Web and API test automation following good QA Automation practices, including Page Object Model, reusable services, dynamic test data generation, reporting, and CI/CD integration with GitHub Actions.

---

## Technologies

- Cypress
- JavaScript
- Node.js
- Mochawesome Reporter
- GitHub Actions

---

## Test Coverage

# 🌐 Web Automation

### Login

- [x] Login with administrator user
- [x] Login with common user
- [x] Invalid password
- [x] Non-existent e-mail
- [x] Required fields validation

### User Registration

- [x] Register common user
- [x] Register administrator
- [x] Prevent duplicated e-mail
- [x] Required fields validation
- [x] Invalid e-mail format

### Product Management

- [x] Register new product
- [x] Register and delete a product

---

# 🔌 API Automation

### Users

#### POST /usuarios

- [x] Create common user
- [x] Create administrator user
- [x] Prevent duplicated e-mail
- [x] Required fields validation

#### PUT /usuarios/{id}

- [x] Update only user password
- [x] Update only user name
- [x] Update only user e-mail
- [x] Promote common user to administrator
- [x] Demote administrator to common user

#### DELETE /usuarios/{id}

- [x] Delete common user
- [x] Delete administrator user

---

## Project Architecture

The project follows a modular architecture focused on maintainability and scalability.

- Page Objects
- Services
- Factories
- Selectors
- Routes
- Custom Commands
- Hooks
- Dynamic Test Data
- Automatic Test Data Cleanup

---

## Project Structure

```text
cypress/
│
├── e2e/
│   ├── api/
│   └── web/
│
├── pages/
├── services/
├── selectors/
├── fixtures/
├── support/
├── utils/
│
└── reports/
```

---

## Prerequisites

Before running the project, make sure you have installed:

- Node.js 20+
- npm 10+

---

## Installation

Clone the repository:

```bash
git clone https://github.com/FelipeDiasAugusto/serverest-cypress.git
```

Navigate to the project folder:

```bash
cd serverest-cypress
```

Install the dependencies:

```bash
npm ci
```

---

## Running the Tests

### Open Cypress Test Runner

```bash
npm run cy:open
```

### Run all tests

```bash
npm test
```

### Run Web tests only

```bash
npm run test:web
```

### Run API tests only

```bash
npm run test:api
```

### Run all tests with Mochawesome Report

```bash
npm run test:report
```

---

## Reports

After the execution, the Mochawesome report will be available in:

```text
cypress/reports/
```

Screenshots and videos are automatically generated on test failures.

---

## CI/CD

This project includes a GitHub Actions workflow that automatically:

- Installs dependencies
- Executes Web and API tests
- Generates Mochawesome Report
- Uploads reports as artifacts
- Uploads screenshots and videos on failures

---

English | [Português](README.pt-BR.md)