import React, { Component } from 'react';
import './App.css';
import DataEntry from '../DataEntry/DataEntry';

class App extends Component {

  render() {

    return (
      <div className='App'>

        <DataEntry></DataEntry>

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
