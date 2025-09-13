import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './polyfills';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
