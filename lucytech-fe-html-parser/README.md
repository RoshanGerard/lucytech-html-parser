## Introduction

LucyTech's HTML Parser Server Practical Test Frontend

This application is designed to efficiently crawl through the provided URL and extract essential information from the web page. The server is capable of parsing HTML content and provides the following information:

- **Internal Links**: Extracts and lists all internal links present on the page.
- **External Links**: Extracts and lists all external links leading to different domains.
- **HTML Version**: Identifies and displays the HTML version used by the web page.
- **Page Title**: Retrieves and shows the title of the web page.
- **Login Page**: Detect login page.

With these capabilities, our HTML Parser Server aims to simplify web scraping and data extraction tasks, 
making it a valuable tool for developers and analysts.

## How to Run

### Prepare to run
When the repo is cloned please install the dependencies prior to start running the application,
this is a one time process unless `node_modules` directory doesn't exists or deleted.

```shell
cd ~/<project>
npm install
```

### Run the App
Here we only provide instructions how to run frontend in development mode, please use the below command to run.

```shell
cd ~/<project>
npm run dev
```

## Dependencies

This project uses the following dependencies:

### Core Dependencies
- **React** version 18.3.1: A JavaScript library for building user interfaces.
- **React DOM** version 18.3.1: Provides DOM-specific methods for React.
- **React Router DOM** version 7.1.1: A complete routing library for React.
- **Ant Design (antd)** version 5.22.7: A popular design system for React.
- **Axios** version 1.7.9: A promise-based HTTP client for the browser and Node.js.

### Development Dependencies
- **TypeScript** version ~5.6.2: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite** version 6.0.5: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **ESLint** version 9.17.0: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **TypeScript ESLint** version 8.18.2: ESLint tooling for TypeScript.
- **ESLint Plugin React Hooks** version 5.0.0: ESLint rules for React hooks.
- **ESLint Plugin React Refresh** version 0.4.16: ESLint plugin for React fast refresh.
- **Globals** version 15.14.0: Global variable definitions for various JavaScript environments.
- **@vitejs/plugin-react-swc** version 3.5.0: Vite plugin for React with SWC.
- **@eslint/js** version 9.17.0: ESLint configuration.
- **@types/react** version 18.3.18: TypeScript definitions for React.
- **@types/react-dom** version 18.3.5: TypeScript definitions for React DOM.

### Scripts
- **dev**: Starts the development server using Vite.
- **build**: Compiles the project using TypeScript and Vite.
- **lint**: Runs ESLint to lint the codebase.
- **preview**: Previews the production build using Vite.

Ensure to run `npm install` or `yarn install` to install all the dependencies before starting development.

## Author

- **Developer**: Roshan G. Bolonna
- **Email**: srgbolonna@gmail.com
- **GitHub**: [GitHub Profile](https://github.com/RoshanGerard)
- **Website**: [LinkedIn](https://www.linkedin.com/in/srgbolonna)

If you have any questions or feedback, feel free to reach out.
