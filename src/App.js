import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

//1. 4cb27dc371e247409997746f17e4b1f6

//2. df43998bc29d41e4853ba8e0116c30e2
export class App extends Component {

  pageSize = 6;
  apiKey = 'df43998bc29d41e4853ba8e0116c30e2';
  country = 'in';

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#198754'
          progress={this.state.progress}
          height={3}
        />
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} key='general' pageSize={this.pageSize} country={this.country} apiKey={this.apiKey} category='general' />} />
          <Route path='/business' element={<News setProgress={this.setProgress} key='business' pageSize={this.pageSize} country={this.country} apiKey={this.apiKey} category='business' />} />
          <Route path='/entertainment' element={<News setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} country={this.country} apiKey={this.apiKey} category='entertainment' />} />
          <Route path='/health' element={<News setProgress={this.setProgress} key='health' pageSize={this.pageSize} country={this.country} apiKey={this.apiKey} category='health' />} />
          <Route path='/science' element={<News setProgress={this.setProgress} key='science' pageSize={this.pageSize} country={this.country} apiKey={this.apiKey} category='science' />} />
          <Route path='/sports' element={<News setProgress={this.setProgress} key='sports' pageSize={this.pageSize} country={this.country} apiKey={this.apiKey} category='sports' />} />
          <Route path='/technology' element={<News setProgress={this.setProgress} key='technology' pageSize={this.pageSize} country={this.country} apiKey={this.apiKey} category='technology' />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App