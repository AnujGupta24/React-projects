# My Portfolio Website

## Description
This is a personal portfolio website built using **React.js** and styled with **Tailwind CSS**. The website showcases my projects, skills, resume, and contact information in a **responsive and interactive** manner.

## Features
- **Navigation Bar** with smooth scrolling
- **Projects Section** displaying my work with descriptions
- **Skills Section** showcasing my technical expertise
- **Resume Download** button
- **Contact Form** for visitors to reach out
- **Responsive Design** for mobile and desktop views
- **Optimized Performance** with lazy loading

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Hosting:** Netlify
- **Version Control:** Git, GitHub

---

## Development Process

### 1. Project Setup
- Created a new React project using:
  ```sh
  npx create-react-app my-portfolio
  ```
- Installed dependencies:
  ```sh
  npm install react-router-dom tailwindcss @headlessui/react
  ```
- Configured Tailwind CSS:
  ```sh
  npx tailwindcss init -p
  ```

### 2. Folder Structure
```
my-portfolio/
│-- src/
│   │-- components/
│   │-- pages/
│   │-- assets/
│   │-- App.jsx
│   │-- index.jsx
│   │-- styles.css
│-- public/
│-- package.json
│-- tailwind.config.js
│-- README.md
```

### 3. Development & Testing
- Used **React Router** for navigation
- Applied **lazy loading** for performance optimization
- Tested components using Jest & React Testing Library
  ```sh
  npm test
  ```

### 4. Building the Project
- Created a production-ready build using:
  ```sh
  npm run build
  ```

---

## Deployment Process

### 1. Upload to GitHub
- Initialized Git and added files:
  ```sh
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/AnujGupta24/my-portfolio.git
  git push -u origin main
  ```

### 2. Deploy to Netlify
- Linked the GitHub repository to Netlify
- Selected the **build folder (`dist`)** as the deployment directory
- Set **build command:** `npm run build`
- Clicked **Deploy** 🎉

---

## Challenges & Solutions

### **1. Git Not Tracking the Project Folder**
- Issue: Git ignored the `my-portfolio` folder when committing.
- Solution: Manually navigated into the folder and initialized Git inside it.
  ```sh
  cd my-portfolio
  git init
  ```

### **2. Deployment Issues on Netlify**
- Issue: Netlify build failed due to missing dependencies.
- Solution: Installed all dependencies again and set the correct build command.
  ```sh
  npm install
  ```

### **3. Testing Errors**
- Issue: `expect` and `test` were not recognized.
- Solution: Installed Jest properly and checked test configurations.
  ```sh
  npm install --save-dev jest @testing-library/react @testing-library/jest-dom
  ```

---

## Live Demo
🔗 **[My Portfolio](https://my-reactapp-portfolio.netlify.app/)**
