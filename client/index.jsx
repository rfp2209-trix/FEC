import React from 'react';
import { createRoot } from 'react-dom/client';
import {Context} from './src/Context.js'
import App from './src/app.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <Context>
    <App />
  </Context>
);
