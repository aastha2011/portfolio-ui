import React from 'react';
import ReactDOM from 'react-dom/client';
import { Portfolio } from './components/Portfolio';
import '../src/components/styles.css';
import 'boxicons/css/boxicons.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
