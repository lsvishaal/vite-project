import React from 'react';
import ReactDOM from 'react-dom/client';
import { toggleTheme ,Navbar, MyComponent } from './Navbar.jsx';
import {Counter} from './Counter.jsx'
import './output.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <MyComponent />
    <Counter />
  </React.StrictMode>
);

