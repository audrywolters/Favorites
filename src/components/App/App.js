import React, { Component } from 'react';
import './App.css';
import Categories from '../Categories/Categories';
import Episodes from '../Episodes/Episodes';

class App extends Component {

  render() {

    return (
      <>
        <div className='App'>
          <Categories></Categories>
          <Episodes></Episodes>
        </div>
      </>
    );
  }

}

export default App;
