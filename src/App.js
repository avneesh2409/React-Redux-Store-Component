import React, { Component } from 'react'
import './App.css'
import Router from './router'
class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src="./logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Simple React App</h1>
        </header>
        <Router />
      </div>

    );
  }
}

export default App;
