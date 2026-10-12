# React Theme Changer Using a Custom Hook

A simple React project that demonstrates how to switch between light and dark themes using a custom React hook. The selected theme is stored in the browser's `localStorage`, allowing the user's preference to persist even after refreshing the page.

## Features

- Toggle between light and dark themes.
- Create a reusable custom hook (`useTheme`).
- Persist theme preferences using `localStorage`.
- Dynamically update the document body's theme.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS3
- Local Storage

## How It Works

1. The `useTheme` custom hook retrieves the saved theme from `localStorage`.
2. If no saved theme exists, the application defaults to light mode.
3. Clicking the **Change Theme** button toggles between light and dark modes.
4. The `useEffect` hook updates the `data-theme` attribute on the document body.
5. The selected theme is saved in `localStorage` and persists across page refreshes.
6. CSS variables dynamically change the background and text colors.