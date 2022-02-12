import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

//1. 4cb27dc371e247409997746f17e4b1f6

//2. df43998bc29d41e4853ba8e0116c30e2
export class App extends Component {


  render() {
    return (
      <>
        <Navbar />
        <News pageSize={6} country={'in'} apiKey={'4cb27dc371e247409997746f17e4b1f6'} category='science' />
      </>
    )
  }
}

export default App