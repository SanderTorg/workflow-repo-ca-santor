# Workflow repo for the CA

This is a CA project, made by Sander D. Torgersen with the purpose of configuring the project with common dependencies and testing the project.

## Report and links

[Google docs report](https://docs.google.com/document/d/1MeSENBUVvHJSSdv6_W75rMBZWqszv8PrtHY2HrhX3qs/edit?usp=sharing)

[GitHub Pull Request](https://github.com/SanderTorg/workflow-repo-ca-santor/pull/1)

[GitHub repository for my forked repo](https://github.com/SanderTorg/workflow-repo-ca-santor)

[GitHub repository for the original Noroff repo](https://github.com/NoroffFEU/workflow-repo-ca)

## How to start

How to install:

```bash
npm run install
```

How to run the project:

```bash
npm run start
```

### Sripts Commands

How to run vitest:

```bash
npm run test
```

How to run playwright end-to-end test:

```bash
npm run test:e2e
```

How to run Playwright end-to-end ui test:

```bash
npm run test:e2e:ui
```

How to see Playwright report of tests:

```bash
npm run test:e2e:report
```

How to run tailwind css watch:

```bash
npm run dev
```

How to run husky:

```bash
npm run prepare
```

## Tech list

- **Languages & Tools**:
  - **HTML**
  - **CSS**
  - **JavaScript**
  - **[Tailwind](https://tailwindcss.com/)**
- **Testing**:
  - [Vitest](https://vitest.dev/) – unit testing
  - [Playwright](https://playwright.dev/) – end-to-end (E2E) testing
- **Linting & Formatting**:
  - [ESLint](https://eslint.org/) – JavaScript linting
  - [Prettier](https://prettier.io/) – code formatting
- **Git Hooks & Linting Automation**:
  - [Husky](https://typicode.github.io/husky)
  - [lint-staged](https://github.com/okonet/lint-staged)

## Environment Variables

My .env example:

```bash
API_BASE_URL = "https://example.com/api/"
BASE_URL = "http://123.1.123:5000/" # NOT THE REAL URL FOR LIVE SERVER

USER_NAME = "YourName"
USER_EMAIL = "your_email@stud.noroff.no"
USER_PASSWORD = "your_password_here"
```

## Authors

[Sander Dorgan Torgersen](https://github.com/SanderTorg)
