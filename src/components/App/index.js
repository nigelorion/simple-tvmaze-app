import React, { Component } from 'react';
import Main from '../Main'
import Series from '../../containers/Series'
import './App.css';


class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV series</h1>
        </header>


        <Main />
      </div>
    );
  }
}

export default App;