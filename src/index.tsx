import ReactDOM from 'react-dom/client';
import { App } from "./app";

const rootEl: HTMLElement = document.getElementById('root');
if (rootEl === null) throw new Error('Root container missing in index.html');

const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
