import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Counter from  './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button/>
        <Counter/>
      </div>
    );
  }
}

export default App;
