import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffectExamples from './UseEffectExamples';
import Grandparent from './Grandparent';
import ValueContext from './ValueContext';

function App() {
  const [myDate, myDateUpdate ] = useState(new Date())

const [hide, setHide ]= useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      myDateUpdate(new Date());
    }, 1000);
  })
  return (
    <div> 
      <input type="checkbox"  onChange={() => setHide(!hide)}/> Hide
      {hide ? null : <UseEffectExamples />}

      <ValueContext.Provider value={hide}>
      <Grandparent />

      </ValueContext.Provider>

      <input />
      <div>{myDate.toString()}</div>
    </div>
  );
}

export default App;
