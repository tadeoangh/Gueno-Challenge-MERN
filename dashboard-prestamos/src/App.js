import React from 'react';
import Client from './components/Client';
import Navbar from './components/Navbar';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="container mt-5">
          <div className="row">
            <Client />
          </div>
        </div>
    </div>
  );
}

export default App;
