import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


// 4cb27dc371e247409997746f17e4b1f6
export class App extends Component {

  c = "There";

  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    )
  }
}

export default App