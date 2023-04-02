import ReactDOM from 'react-dom/client';
import { App } from "./app";
import { BrowserRouter } from 'react-router-dom';

const rootEl: HTMLElement | null = document.getElementById('root');
if (rootEl === null) throw new Error('Root container missing in index.html');

const root = ReactDOM.createRoot(rootEl);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
