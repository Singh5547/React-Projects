# Scroll Beyond
Scroll Beyond is a React application that fetches product data from the DummyJSON API and displays it in a modern card layout. It features a dynamic scroll progress bar that updates in real time as the user scrolls through the page.

## Features
- Fetches product data from the DummyJSON API.
- Displays up to 100 products in a card-based layout.
- Tracks scroll position with a real-time progress bar.
- Shows loading messages while fetching data.
- Handles API errors and HTTP failures.
- Uses React Hooks (`useState` and `useEffect`) for state management and side effects.
- Features a modern dark theme, gradient effects, and smooth hover animations.
- Cleans up the scroll event listener when the component unmounts.

## Tech Stack
- **React** — Component-based UI development.
- **JavaScript (ES6+)** — Application logic and asynchronous data fetching.
- **CSS3** — Styling, animations, gradients, and responsive layouts.
- **DummyJSON API** — Product data source.

## API Reference
**API:** [DummyJSON Products API](https://dummyjson.com/products?limit=100)

**Endpoint:**
```text
https://dummyjson.com/products?limit=100