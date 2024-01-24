import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Item from './pages/item';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/item" element={<Item/>}/>
    </Routes>
  );
}

export default App;

