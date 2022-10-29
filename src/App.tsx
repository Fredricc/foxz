import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [myDate, myDateUpdate ] = useState(new Date())
  return (
    <div> 
    <h3>Example HTML</h3>
    <input />
    <div>${new Date()}</div>
    </div>
  );
}

export default App;
