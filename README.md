# Hero.io Productive Apps

Responsive single-page experience for browsing, searching, and installing productivity apps. Includes live search, installation management with localStorage, detailed charts, and custom error handling.

## Features

- Home hero with Play/App Store links, stats, and featured apps
- All Apps page with live, case-insensitive search and loading states
- App Details with Recharts ratings breakdown, install flow, success toasts, and description
- My Installation page with localStorage persistence, uninstall + toast, and download sorting
- Global navigation loader, route-safe reloads, and custom 404/app-not-found screens

## Technologies

- React 19 + Vite
- React Router DOM 7
- Recharts for data visualization
- react-hot-toast for feedback
- Custom CSS for responsive layout and animations

## Getting Started

```
npm install
npm run dev
```

## Production

```
npm run build
npm run preview
```
