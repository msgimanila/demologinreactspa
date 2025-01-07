import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import fastCopy from 'fast-copy';
import { Provider } from 'react-redux';
import store from './redux/store';

globalThis.structuredClone = fastCopy;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
