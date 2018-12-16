import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Firebase from './components/firebase';


class App extends Component {

  componentDidMount() {
    new Firebase();
    console.log('it did');
    
  }



  render() {
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
            Learn React!!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
