
# Vite React Project Setup

### Check Node.js and npm Versions


```bash
node -v
npm -v
```

## Steps to Set Up Vite React Project

```bash
npm create vite@latest my-app
```
- Then select `react`, then `javascript`

```bash
cd my-app
```
```bash
npm install
```
```bash
npm run dev
```
- But some time for the wrong path it may show
```bash
npm error Missing script: "dev"
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: C:\Users\Lenovo\AppData\Local\npm-cache\_logs\2025-01-28T17_24_15_797Z-debug-0.log
```
- To overcome this go to your project command `cd app-name`. 

This command starts the Vite development server. You can now open your browser and visit `http://localhost:5173` to view your Vite React app running.

```bash
npm install react-router-dom
```

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
