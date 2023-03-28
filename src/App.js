import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import "./assets/styles/main.css"
import Add from './pages/Add';
import Edit from './pages/Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-task' element={<Add/>}/>
        <Route path='/edit-task/:taskId' element={<Edit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
