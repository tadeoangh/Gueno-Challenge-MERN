import React from 'react';
import Search from './components/SearchBar'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <img className="App-logo" src={logo} alt="logo" />
      </div>

      <Search />

    </div>
  );
}

export default App;
