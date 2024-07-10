import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, MyComponent } from './App.jsx';
import './output.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <MyComponent />
  </React.StrictMode>
);
