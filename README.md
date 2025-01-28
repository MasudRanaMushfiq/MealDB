
# Vite React Project Setup

This guide will walk you through the process of setting up a Vite project with React and JavaScript.

## Prerequisites

Before setting up the project, ensure that you have the following installed on your system:

- **Node.js** (Recommended version: 16.0 or higher)
- **npm** (Node Package Manager) – comes with Node.js

### Check Node.js and npm Versions


```bash
node -v
npm -v
```

If these commands return a version number, you’re good to go. If not, you will need to install Node.js and npm.

- [Download Node.js](https://nodejs.org/), which includes npm.

---

## Steps to Set Up Vite React Project

### 1. Create a New Vite Project

Open your terminal and run the following command to create a new Vite project. Replace `my-app` with your preferred project name:

```bash
npm create vite@latest my-app
```
- Then select `react`, then `javascript`
- After that get `1` step back to your app-name `cd my-app` 
- Now `npm install` and then to run in local `npm run dev`. 



### 2. Navigate to the Project Folder

```bash
cd my-vite-react-app
```

### 3. Install Project Dependencies

```bash
npm install
```

This will install all the dependencies listed in the `package.json` file, including React, ReactDOM, and Vite-related packages.

### 4. Start the Development Server

```bash
npm run dev
```

This command starts the Vite development server. You can now open your browser and visit `http://localhost:5173` to view your Vite React app running.

### 5. Optional: Open the Project in Your Code Editor

To begin developing your project, open it in your preferred code editor (e.g., VSCode):

```bash
code .
```

This will launch the current project folder in VSCode.

### 6. (Optional) Install Additional Dependencies

You might want to install other libraries or dependencies. For example, if you need routing in your app, you can install `react-router-dom`:

```bash
npm install react-router-dom
```


---

## Project Structure

Once the setup is complete, your project folder will look something like this:

```bash
my-vite-react-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ... (other source files)
├── index.html
├── package.json
└── vite.config.js
```

Here’s what each folder/file contains:

- **public/**: Contains static files such as `index.html`.
- **src/**: Contains React components and other JavaScript files.
- **index.html**: The main HTML file that gets served to the browser.
- **package.json**: The file that manages your project’s dependencies and scripts.
- **vite.config.js**: Vite configuration file for customizing the build and development process.

---

## Conclusion

You’ve now successfully set up a Vite React project! You can start building your React app with Vite’s fast build times, modern development tools, and optimized performance. Enjoy coding!
