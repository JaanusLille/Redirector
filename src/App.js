import React, { useEffect } from 'react';
import './App.css';

function App() {

  function getConsoleLog(){
    // console.log("Täheke");
    window.location.assign("https://reactjs.org/");
  }

  useEffect(() => {
    getConsoleLog()
  });

  return (
    <div className="App">
    </div>
  );
}

export default App;
