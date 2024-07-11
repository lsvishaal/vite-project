import React from 'react';
import ReactDOM from 'react-dom/client';
import { toggleTheme ,Navbar, MyComponent } from './Navbar.jsx';
import {Counter} from './Counter.jsx'
import {Card} from './Components/Card.jsx'
import './output.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    {/* <MyComponent /> */}
    {/* <Counter /> */}
    <Card />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <
// )

