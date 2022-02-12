import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//1. 4cb27dc371e247409997746f17e4b1f6

//2. df43998bc29d41e4853ba8e0116c30e2
export class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<News key='general' pageSize={6} country={'in'} apiKey={'4cb27dc371e247409997746f17e4b1f6'} category='general' />} />
          <Route path='/business' element={<News key='business' pageSize={6} country={'in'} apiKey={'4cb27dc371e247409997746f17e4b1f6'} category='business' />} />
          <Route path='/entertainment' element={<News key='entertainment' pageSize={6} country={'in'} apiKey={'4cb27dc371e247409997746f17e4b1f6'} category='entertainment' />} />
          <Route path='/health' element={<News key='health' pageSize={6} country={'in'} apiKey={'4cb27dc371e247409997746f17e4b1f6'} category='health' />} />
          <Route path='/science' element={<News key='science' pageSize={6} country={'in'} apiKey={'4cb27dc371e247409997746f17e4b1f6'} category='science' />} />
          <Route path='/sports' element={<News key='sports' pageSize={6} country={'in'} apiKey={'4cb27dc371e247409997746f17e4b1f6'} category='sports' />} />
          <Route path='/technology' element={<News key='technology' pageSize={6} country={'in'} apiKey={'4cb27dc371e247409997746f17e4b1f6'} category='technology' />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App