import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

export type Name = string;

declare global {
  interface Window { myCall(name: Name): void; }
}

window.myCall = (name: Name) => console.log(name);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
