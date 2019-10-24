import React from 'react';
import logo from './logo.svg';
import './App.less';
import axios from 'axios'

function App() {
  axios.get("/api/search?keywords=海阔天空").then(r => {
    console.log('r :', r);
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
