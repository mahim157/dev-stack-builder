# 🚀 Dev Stack Builder

A modern, interactive web application built for developers to explore, compare, and assemble their ultimate tech stack for any upcoming project.

---

## 🛠️ Tech Stack & Technologies Used

- **Frontend Framework:** React.js
- **Styling & UI:** Tailwind CSS
- **Notifications:** React-Toastify
- **Icons & Assets:** Devicon CDN / SVGs

---

## ✨ Key Features

1. **Interactive Stack Selection & Live Visual Feedback**  
   Add or remove technologies with real-time dynamic card highlight styles (emerald borders) and instant UI updates.

2. **Strict Duplicate Prevention & Toast Alerts**  
   Ensures clean stack management by preventing double additions via robust ID and name checking with instant toast notifications.

3. **Fully Responsive Header & Layout**  
   Optimized layout for both desktop and mobile, featuring a streamlined mobile menu, smooth hover animations, and a sticky stack overview sidebar.

---

## ❓ React Concepts & Interview Questions

### 1. What is JSX, and why is it used in React?
**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside React code. It makes building user interfaces much easier and more readable because we can structure UI elements and handle JavaScript logic in one place.

---

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed down from a parent component to a child component. The child cannot modify its own props.
- **State:** Component-managed data that can change over time based on user interactions. When state changes, React automatically re-renders the UI to reflect the updates.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` allows functional components to store and manage dynamic state data. In this project, I used `useState` to track the list of technologies fetched (`technologies`), the user's selected tech stack (`stack`), and the loading state (`loading`).

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects in functional components, such as data fetching, subscriptions, or DOM updates. I used it to perform an asynchronous `fetch()` request to load the `technologies.json` file when the component first mounts.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses `key` props to identify which items in a list have changed, been added, or been removed. Unique keys help React perform efficient DOM re-rendering without having to recreate the entire list from scratch.

---

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI elements based on specific logical conditions (using `if`, ternary operators `? :`, or `&&`).  
**Example from this project:** Showing an empty state message when the stack has no items:

```jsx
{stack.length === 0 ? (
  <div className="text-center py-10 border border-dashed border-slate-200 rounded-lg bg-white">
    <p className="text-xs font-medium text-slate-400">Your stack is empty</p>
  </div>
) : (
  /* Render stack items list */
)}