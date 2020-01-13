import React, { Component } from 'react';
//import logo from 'logo.svg';
import './App.css';
import CakeDemo from './components/Cakedemo';
import store from './redux/store';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    // console.log("Host URL" + process.env.PUBLIC_URL);
    return (
      <Provider store={store} >
        <div className="App">
          <header className="App-header">
            <img src="./logo.svg" className="App-logo" alt="logo" />
            <h1 className="App-title">Simple React App</h1>
          </header>
          <CakeDemo />
        </div>
      </Provider>
    );
  }
}

export default App;
