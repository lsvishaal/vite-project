import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, MyComponent } from './Navbar.jsx'; // Ensure toggleTheme is used if needed
import { Counter } from './Counter.jsx';
import { Card } from './Components/Card.jsx';
import './output.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <MyComponent />
    <Card userName="Gopu" />
    <Card userName="Jason" post="Staff.Eng" />
  </React.StrictMode>
);

