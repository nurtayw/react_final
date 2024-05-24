import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavProvider } from './components/context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NavProvider>
            <App />
        </NavProvider>
    </React.StrictMode>
);
