import React, {Component} from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="logo.png" alt=""/>
      </header>
      <div className="container">
        <nav className="nav">
          <div>
            Profile
          </div>
          <div>
            Messages
          </div>
          <div>
            News
          </div>
          <div>
            Music
          </div>
          <div>
            Settings
          </div>
        </nav>
        <div className="content">
          Контент
        </div>
      </div>
    </div>
  )
}

export default App;
