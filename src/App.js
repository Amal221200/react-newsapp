import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

//1. 4cb27dc371e247409997746f17e4b1f6

//2. df43998bc29d41e4853ba8e0116c30e2
const App = () => {

  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API1;
  const country = "in"

  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='#198754'
        progress={progress}
        height={3}
      />
      <Routes>
        <Route path='/' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country={country} apiKey={apiKey} category='general' />} />
        <Route path='/business' element={<News setProgress={setProgress} key='business' pageSize={pageSize} country={country} apiKey={apiKey} category='business' />} />
        <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} country={country} apiKey={apiKey} category='entertainment' />} />
        <Route path='/health' element={<News setProgress={setProgress} key='health' pageSize={pageSize} country={country} apiKey={apiKey} category='health' />} />
        <Route path='/science' element={<News setProgress={setProgress} key='science' pageSize={pageSize} country={country} apiKey={apiKey} category='science' />} />
        <Route path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country={country} apiKey={apiKey} category='sports' />} />
        <Route path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={pageSize} country={country} apiKey={apiKey} category='technology' />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App