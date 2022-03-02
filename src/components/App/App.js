import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <div>Enter your favorite</div>
        <label>Animal</label>
        <input></input>

        <label>Color</label>
        <input></input>

        <button>Save</button>
      </div>
    );
  }
}

export default App;
